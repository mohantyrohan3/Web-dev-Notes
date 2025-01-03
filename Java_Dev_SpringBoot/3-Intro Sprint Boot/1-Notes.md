Creating a Sprint Boot Project
- Go to Sprint Initializr and Dependency - Spring Web for making rest api



Creating Rest Api using Spring Boot




@SpringBootApplication
public class IntroToSprintbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(IntroToSprintbootApplication.class, args);
	}
}




@RestController
public class CourseController {

    @RequestMapping("/courses")
    public List<Course> retrieveAllCourses(){
        return Arrays.asList(
                new Course(1,"Learn AWS" , "Author1"),
                new Course(2,"Learn Devops" , "Author2"),
                new Course(3 , "Learn ML", "Author3")
        );
    }
}


# RestController annotation for telling that this is a rest api controller
# RequestMapping for telling the url of the rest api



--------------------------------------------------------------------------------------------------------------------------------------

Auto Configuration - Automated Configuration of our app (Component scan  , data sources , json conversion etc..)
Decides based on which frameworks are in the class path , what is existing configuration (Annotations etc)

In application.properties file
if we write
- logging.level.org.springframework=debug --- it will show more logs 



Build faster with spring boot dev tools


<!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-devtools -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <version>3.4.1</version>
</dependency>
paste it in pom.xml file

Now automatically changes will shown instead of stopping and restarting the server



