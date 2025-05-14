Microservices Solutions - Spring Cloud

Spring Cloud - Umbrella project that provides essential microservices needs
- Centralized conf - Manage configuration for multiple microservices in a central GIT repository
- Load Balancing - Distributes requests among active instances oof microservices dynamically
- Service Discovery - Enables automatic discovery of microservices
- Distrubuted Tracing 
- Edge Server - Single Entry point - Implement common features like authentication
- Fault Tolerance - Ensure that failure in one microservice does not cascade and make other microservices to fail


------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Spring Cloud Config Server - For handeling Centralized configurations

- Artifact id will used to refer any specific microservice


- First go to spring initialzr and then choose Config Client (Spring Cloud Config)
- Open up application.properties and write spring.config.import=optional:configserver:http://localhost:8888    (This will be the Config server)
- spring.application.name = limits-service


Standardized Ports

1. Limits Microservice
Ports: 8080, 8081, etc.

2. Spring Cloud Config Server
Port: 8888

3. Currency Exchange Microservice
Ports: 8000, 8001, 8002, etc.

4. Currency Conversion Microservice
Ports: 8100, 8101, 8102, etc.

5. Netflix Eureka Naming Server
Port: 8761

6. API Gateway
Port: 8765

7. Zipkin Distributed Tracing Server
Port: 9411

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Setting Up Config Server

- First go to spring initialzr and then choose Config Server 
- Import the project in the microservices folder
- change the port to 8888   server.port = 8888

- spring.cloud.config.server.git.uri=file:///C:/gitrepo_location

- @EnableConfigServer in Main function


- You can add spring.profiles.active = native to avoid git
- 



------------------------------------------------------------------------------------------------------------------------------------------------------------------------f

# Setting up Git repo

- Make a directory called localconfig-repo and git init
- Make config files such as limits-service.properties

localconfig-repo/
│── limits-service.properties
│── userservice.yml
│── postservice.ymlblue



localhost:8888/limit-service/default