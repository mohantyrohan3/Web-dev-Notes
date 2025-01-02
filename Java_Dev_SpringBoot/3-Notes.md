Auto Wiring using Spring

Creating a Spring bean having relationship with existing spring beans

Using method call

@Bean
public Person person1(){
    return new Person(name() , age());
}


using parameters
@Bean
public Person person2(String name , int age , Address address2){
    return new Person(name,age,address2);
    // parameters name should be same to bean name
}


---------------------------------------------------------------------------------------------------------------------------------------

Spring Container - Manages Spring beans and their lifecycle

Type 1 - Basic Spring Container
Type 2 - Application Context - web application , internationalization


context.getBeanDefinitionNames() --- returns the name of all the beans registered


To resolve the issue of multiple same type of beans error while calling  context.getBean(Address.class); , you can use primary and Qualifier annotations

@Primary
Also can use @Qualifier("name") to resolve it


Resource leak exception -- context is never closed is an issue , to solve it use try , catch and finally 
Another approach try with resources

try(context = AnnotationConfigApplicationContext(Config.class)){
    // Rest of the code
}


-----------------------------------------------------------------------------------------------------------------------------------------

public static void main(String[] args) {
		var context = new AnnotationConfigApplicationContext(GameConfiguration.class);
		GameRunner temp = context.getBean("gameRun" , GameRunner.class);
		temp.run();
	}


# While using getBean() , if you are using custom objects , use ClassName.class like context.getBean("gameRun" , GameRunner.class);



@Configuration
public class GameConfiguration {

    @Bean
    public GamingConsole gamingConsole() {
        return new MarioGame();
    }

    @Bean
    public GameRunner gameRun(GamingConsole gamingConsole) {
        return new GameRunner(gamingConsole);
    }
}