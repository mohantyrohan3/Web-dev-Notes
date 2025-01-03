Loose Coupling using Spring Framework

GamingConsole m = new MarioGame();  -One Object creation
GameRunner g = new GameRunner(m);  - One object creating + wiring of dependencies

- here m is a depedency of GamerRunner
- Injecting the dependency

Creation of objects and wiring was done manually , lets do it using spring framework

-----------------------------

- Once jvm is initialized means public static void main() , then we will define a spring context

Steps
- Launch the Spring Context
- Configure the things we want Spring to Manage

we can do both by creating a configuration class
Create a HelloWorldConfiguration.java class


@Configuration
public class HelloWorldConfiguration{
    // here you can define spring beans which can be managed by spring
    
}


in Main class

var context = new AnnotationConfigApplicationContext(HelloWorldConfiguration.class);


# Defining Beans which we want to manage


@Configuration
public class HelloWorldConfiguration{
    

    // Produces a bean managed by spring container
    @Bean
    public String name(){
        return "Rohan";
    }
    
}


TO get the bean we do

context.getBean("name");


-----------------------------------------------------------------------------------------------------------------------------------



Record in a fetaure to reduce verbosity in creating beans , we dont have to write getters , setters , equals, hashcode , constructors


record Person(String name , int age) {};


@Bean
public Person person(){
    Person newperson = new Person("Ravi" , 20);
    return newperson;
}


To change the bean name
@Bean(name = "Your custom bean name")

You can also use type of the bean to retrive
context.getBean(Address.class);