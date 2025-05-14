Making Diff profiles

in the git repo folder itself - make limit-service-dev.properties
- just add spring.profiles.active= dev  inside application.properties inside the actual service

- if above one is not working add
spring.cloud.config.profile = dev



----------------------------------------------------

To get on which port its running - for Load Balancing purposes


@Autowired
private Environment enviroment; 


enviroment.getProperty("local.server.port");


-------------------------------------------------------------------------------------------------------------------------------------------------------------------


Calling a REST API from one microservice to another


- Either use REST TEMPLATE or WebClient



<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>




private final WebClient webClient = WebClient.create("https://api.example.com");

    public String getUserDetails() {
        return webClient.get()
                .uri("/users/1")
                .retrieve()
                .bodyToMono(String.class)
                .block(); // Blocking call (use `.subscribe()` for async)
    }



# Using Path variables

public String getUserDetails(String userId) {
    return webClient.get()
            .uri("/users/{id}", userId)  // Path Variable
            .retrieve()
            .bodyToMono(String.class)
            .block(); 
}


# Using Request Body


public String createUser(User user) {
        return webClient.post()
                .uri("/users")
                .body(Mono.just(user), User.class) // Sending request body
                .retrieve()
                .bodyToMono(String.class)
                .block(); 
    }