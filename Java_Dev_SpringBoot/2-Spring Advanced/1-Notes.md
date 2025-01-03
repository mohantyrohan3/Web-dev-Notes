Lazy Intialization of Spring Beans
- Default Initialization is Eager

When we are creating component and a constructor for a classB where initialization logic is written. And when we are making context these runs without even calling .getBean(). Default is Automatic creation

to Prevent this we can use Lazy Initiliazation

@Component
@Lazy

Eager Intialization is recommended as errors in the configuration are discovered immediately at the startup

--------------------------------------------------------------------------------------------------------------------------------


Bean Scopes

@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)

Normal class/Singleton class - same bean is retrieved if called multiple times
Prototype class - different beans are created and returned when called multiple times

Default class is Singleton

Spring Singleton - One object instance per Spring IoC container
Java Singleton - One object instance per JVM


--------------------------------------------------------------------------------------------------------------------------------
PrePost Annotations


@PostContruct
public somemethod{};

postcontruct annotation will make sure that after initialization and autowiring happens this method with postconstruct annotation is called


PreDestroy --- before beans gets destroyed from lifecycle to write clean code


Jakarta EE - contains Enterprise capabilities


--------------------------------------------------------------------------------------------------------------------------------

Jakarta CDI - Contexts and Dependency Injection

add Dependency in pom.xml file

<dependency>
    <groupId> jakarta.inject </groupId>
    artifactId
    version
</dependency>


@Named instead of Component
@Inject instead of AutoWired

