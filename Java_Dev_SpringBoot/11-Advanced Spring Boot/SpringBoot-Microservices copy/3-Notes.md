Feign Rest client - For simplyfing the rest api calls to other microservices

Add the dependency

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>


First we will create a proxy

- add @EnableFeignClients to the main class 


@FeignClient(name = "currency-exchange"  , url = "localhost:8000")  --- here write the name of the microservice you want to call
public interface CurrencyExchangeProxy {


    @GetMapping("/currency_exchange/{from}/{to}")
    public CurrencyConversion retrieveValue(@PathVariable String from , @PathVariable String to);

}



- Now simply autowire it in the controller

@AutoWired
CurrencyExchangeProxy currproxy;


// Simply call the .retrieveValue() method


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Service Registry - Or Naming Server , all the microservices are registered in the server 

# Purpose: Helps microservices dynamically discover and register with each other. Used for: Microservices register themselves so others can find them without hardcoded URLs
# When another service needs to call it, Eureka provides the available instances dynamically.


- add Eureka Server as the dependency while creating the Spring Iniatilzr


- Then add @EnableEurekaServer  in the main class

- server.port = 8761
- eureka.client.register-with-eureka = false
- eureka.client.fetch-registry = false
- eureka.instance.client.serviceUrl.defaultZone=http://localhost:8761/eureka


Registering the Microservices to the Eureka server

- add the spring-cloud-starter-config and spring-cloud-starter-netflix-eureka-client   dependencies
- eureka.client.serviceUrl.defaultZone=http://localhost:8761/eureka

- @EnableDiscoveryClient  in the main function

- Now just remove the url parameter from the @FeignClient()

For handeling loadbalancing between the multiple 