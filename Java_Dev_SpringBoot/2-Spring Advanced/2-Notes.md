using XML configuration file (Legacy not used now a days)

In src/main/resources make a new .xml file


------------------------------------------------------------------------------------------------------------------------------------

@Component - Generic annotation applicable for any class
- Specilizations of @Component
@Service - Indicates that an annotated class has business logic
@Controller - Indicates that an annotated class is a "Controller" -- web controller
@Repository - Indicates that an annotated class is used to retrieve or manipulate data in a database

Spring Evolved throught multiple projects - Core Spring , Spring Security , Spring Data , Spring Integration , Spring Boot , Spring Cloud


------------------------------------------------------------------------------------------------------------------------------------


There are 2 most popular build tools - Maven and Gradle

Maven helps in
- Managing dependencies and their versions
- Build a jar file
- Run your application locally in Tomcat or Jetty
- Run unit tests
- Deploy to a test environment


Exploring POM.xml --- Project Object Model file



<dependencies>
    <dependency>
    </dependency>
</dependencies>



Parent Pom - Dependency management


-------------------------------------------------------------------------------------------------------------------------------------


Maven Build Lifecycle

Validate 
Compile
Test
Package
Integration Test
Verify
Install
Deploy


Imp Maven commands (Not Imp as of now)
mvn --version
mvn compile
mvn test-compile
mvn clean
mvn test
mvn package
mvn help:effective-pom
mvn dependency:tree

