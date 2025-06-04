Cloud API Gateway

API Gateway simplifies API management, security, and performance optimization.
API Gateways enforce security policies like: ✅ Rate limiting (prevent abuse). ✅ IP filtering (allow/deny traffic). ✅ OAuth2, JWT authentication (secure APIs). ✅ SSL/TLS encryption (protect data).


- add Eureka Discovery client   and   Reactive Gateway   dependencies

- server.port = 8765
- spring.application.name = api-gateway
- eureka.client.serviceUrl.defaultZone=http://localhost:8761/eureka
- spring.cloud.gateway/discovery.locator.enabled=true



Instead Use this

spring.cloud.gateway.server.webflux.discovery.locator.enabled=true
spring.cloud.gateway.server.webflux.discovery.locator.lower-case-service-id=true





So the new URL will look like

http:localhost:8765/CURRENCY-EXCHANGE/currency-exchange/from/to/USD/

CURRENCY-EXCHANGE = will be the Microservices Instance name taken from Eureka Server 
currency-exchange/from/to/USD/ - actual rest api endpoint


# All the authenctication logic can be implemented in the api gateway



-----------------------------------------------------------------------------------------------------------------------------------------


Circuit Breaker - Using Resillience4j