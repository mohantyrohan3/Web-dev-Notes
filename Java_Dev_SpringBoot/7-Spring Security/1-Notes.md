Authentication - Is it the right user ?
Authorization - do they have the right access ?

6 Principles of Building Secure Systems
- Trust Nothing
- Assign Least Privileges
- Have complete mediation
- Multiple levels of Security
- have Economy of mechanism
- openness of design


Spring Security Filter chain - As soon a request comes , Spring security performs a series of filters
Authentication 
Authorization
CORS
CSRF
LOGIN
LOGOUT

Add Spring Security in Dependencies

---------------------------------------------------------------------------------------------------------------------------

Everything is automatically authenticated


Basic Auth

- While making a rest api request make sure to add Authorization Header in the form (Basic Base_64_Encodede_Username_Password)


CSRF - Cross-Site Request Forgery

For get requests it allows , but for post request it requires a csrf token

to disable it , in application.properites
server.servlet.session.cookie.same-site = strict


-------------------------------


For cors 
Global Configuration for all rest controllers

@Bean
public WebMvcConfigurer corsConfigurer (){
    return new WebMvcConfigurer(){
        public void addCorsMappings(CorsRegistry registry){
            registry.addMapping("/**")
            .allowedMethods("*")
            .allowedOrigins("https://localhost:3000");
        }
    };
}



Local Configuration

@CrossOrigin