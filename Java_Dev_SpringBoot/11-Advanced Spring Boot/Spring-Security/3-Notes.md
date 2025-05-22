Implementing the Basic Auth

- Here we will use BasicAuthenticationFilter
- Since By default UserAndPasswordAuthenticationFilter is used , we have to add @Configuration across all the components to modify it


Add a new Config class


@Configuration
@EnableWebSecurity
public class SecurityConfig{


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
        httpBasic(withDefaults());
        return http.build();
    }

}




- Now for Fetching details from DataBase we need to have our custom UserDetailsService

Make a new class under service directory

@Service
public class CustomUserDetailsService implements UserDetailsService{

    @Override
    public UserDetails loadUserByUsername(String username) throws UserNotFoundException  {
        
        return userrepository.findByUsername(username).orElseThrow(() -> new UserNotFoundException);
    }
}


- We also has to implement the  class UserDetails in our Entity class


@Entity
public class Users implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String role;

    

    @Override
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return UserDetails.super.isEnabled();
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role));
    }
}



- Now we have to tell the AuthProvider to use the CustomUserDetailsService
- Create CustomAuthenticationManager which will connect to CustomDAOAuthenticationProvider


- Add it in the config class

@Bean
    public UserDetailsService userDetailsService(){
        return new CustomUserDetailsService();
    }
    @Bean
     public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
     }
    @Bean
    public AuthenticationManager authenticationManager(UserDetailsService userDetailsService,
                                                       PasswordEncoder passwordEncoder){
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);

        return new ProviderManager(daoAuthenticationProvider);
    }



- passwordEncoder.encode("admin1234")  // Securely store password


- auth.requestMatchers("/authenticate").permitAll()
                                .anyRequest().authenticated()  for not adding auth at certain routes


