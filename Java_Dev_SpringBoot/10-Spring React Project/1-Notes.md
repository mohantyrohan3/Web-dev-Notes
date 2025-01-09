Solving all the CORS


For selective rest controllers
@CrossOrigins(origins = "http://localhost:3000", allowCredentials = "true")


FOr the entire application


In the main method


@Bean
public WebMvcConfigurer corsConfigurer(){
    return new WebMvcConfigurer(){
        void addCorsMappings(CorsRegistry registry){
            registry.addMapping("/**")
            .allowedMethods("*")
            .allowedOrigins("localhost:3000");
        }
    };
}
