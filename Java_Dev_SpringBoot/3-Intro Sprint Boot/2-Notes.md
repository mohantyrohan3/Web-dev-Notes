Getting Production ready with Spring Boot

- Managing Application Configuration using Profiles 
Different environments need different configurations

for making profiles (application-dev.properties) for developer
(application-prod.properties)

to activate a profile , in the default application.properties files write
spring.profiles.active = prod

trace->debug->info->warning->error->off



------------------------------------------------------------------------------------------------------------------------------------

Configuration Properties

@ConfigurationProperties(prefix = "currency-service")
@Component
public class CurrencyServiceConfiguration{
    private String url;
    private String username;
    private String key;

    Either Constructor or getters or setters
}


Now in application.properties file

currency-service.url = ""
currency-service.username = ""


And you can also use this class as a dependency of some other beans and Autowired it

# It is very much similar to .env file in express js /nodejs backend



------------------------------------------------------------------------------------------------------------------------------------
Actuator - Monitor and Manage your application in your production

Provides a number of endpoints
- beans complete list of beans
- health - application health information
- metrics - application metrics
- mappings - Details around request mappings

just localhost:8080/actuator/ -- only give health properties
to enable other to application.properties

# management.endpoints.web.exposure.include=*
management.endpoints.web.exposure.include=health,metrics // to save memory


---------------------------------------------------------------------------------------------------------------------------------------

Embedded Servers - to make deployment simpler as multiple environments are there
# (Jar + java)


maven clean install

java -jar "location of jar file"
SO we dont need to install web server as it is a part of Jar file already




