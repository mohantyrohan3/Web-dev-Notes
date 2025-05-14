Basic Session Based Authentication System

- Dependencies
<dependencies>
    <!-- Spring Boot Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring Boot Data MongoDB -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-mongodb</artifactId>
    </dependency>

    <!-- Spring Security -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>

    <!-- BCrypt Password Encoder -->
    <dependency>
        <groupId>org.springframework.security</groupId>
        <artifactId>spring-security-crypto</artifactId>
    </dependency>

    <!-- Session Management -->
    <dependency>
        <groupId>org.springframework.session</groupId>
        <artifactId>spring-session-core</artifactId>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.session</groupId>
        <artifactId>spring-session-data-mongodb</artifactId>
    </dependency>
</dependencies>


- application.properties

spring.data.mongodb.uri=mongodb+srv://username:password@database.0ulzzft.mongodb.net/collection?retryWrites=true&w=majority
spring.session.store-type=mongodb
server.port=8080
spring.session.timeout=86400s
spring.session.mongodb.collection-name=sessions
spring.session.mongodb.auto-index-creation=true
spring.security.session-management.session-creation-policy=always



- Document

@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String name;
    
    @Indexed(unique = true)
    private String email;

    private String password;

    private Location location;

    public User(String name, String email, String password, Location location) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.location = location;
    }

    // Getters and Setters

    public static class Location {
        private String type = "Point";
        private List<Double> coordinates;

        public Location(List<Double> coordinates) {
            this.coordinates = coordinates;
        }

        // Getters and Setters
    }
}


- Repository

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}


- Service

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(String name, String email, String password, double lon, double lat) {
        String hashedPassword = passwordEncoder.encode(password);
        User user = new User(name, email, hashedPassword, new User.Location(List.of(lon, lat)));
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}


- Security Configuration

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .antMatchers("/auth/**", "/user/failed").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin().disable()
            .httpBasic();
        return http.build();
    }
}


- User Controller

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Map<String, Object> registerUser(@RequestBody Map<String, Object> payload) {
        String name = (String) payload.get("name");
        String email = (String) payload.get("email");
        String password = (String) payload.get("password");
        double lon = (double) payload.get("lon");
        double lat = (double) payload.get("lat");

        User user = userService.registerUser(name, email, password, lon, lat);
        Map<String, Object> response = new HashMap<>();
        response.put("user", user);
        return response;
    }

    @PostMapping("/login")
    public Map<String, Object> loginUser(Principal principal) {
        Map<String, Object> response = new HashMap<>();
        response.put("msg", "Successfully Logged In");
        response.put("user", principal.getName());
        return response;
    }

    @GetMapping("/details")
    public Map<String, Object> userDetails(Principal principal) {
        Map<String, Object> response = new HashMap<>();
        if (principal != null) {
            response.put("status", "Authenticated");
            response.put("user", principal.getName());
        } else {
            response.put("status", "Not Authenticated");
            response.put("msg", "Not Authenticated");
        }
        return response;
    }

    @PostMapping("/logout")
    public Map<String, Object> logoutUser(HttpSession session) {
        session.invalidate();
        Map<String, Object> response = new HashMap<>();
        response.put("msg", "LOGGED OUT");
        return response;
    }

    @GetMapping("/failed")
    public Map<String, Object> loginFailed() {
        Map<String, Object> response = new HashMap<>();
        response.put("msg", "Failed to Log In");
        return response;
    }
}