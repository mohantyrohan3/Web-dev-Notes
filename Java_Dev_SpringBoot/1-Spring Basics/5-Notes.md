Different types of Dependency Injection in Spring
- Constructor based - Dependencies are set by creating the bean using its constructor
- Setter based - set by calling setter based methods on your beans
- Field - No setter , no constructor. Dependency is injected using reflection


# Constructor based DI

@Component
class BusinessClass{
    Dependency1 dependency1;
    Dependency2 dependency2;
    
    @Autowired
    BusinessClass(Dependency1 dependency1, Dependency2 dependency2) {
        this.dependency1 = dependency1;
        this.dependency2 = dependency2;
    }
    public String toString(){
        return "Using Dependency1: " + dependency1 + " Dependency2: " + dependency2;
    }
}


@Component
class Dependency1{
}


@Component
class Dependency2{
}

@Configuration
@ComponentScan
public class ThirdApplication {

    public static void main(String[] args) {
        try(var context = new AnnotationConfigApplicationContext(ThirdApplication.class)){
            System.out.println(context.getBean(BusinessClass.class));
        }
    }
}



# Field Injection


@Component
class BusinessClass{
    @Autowired
    Dependency1 dependency1;

    @Autowired
    Dependency2 dependency2;

    public String toString(){
        return "Using Dependency1: " + dependency1 + " Dependency2: " + dependency2;
    }
}



# Setter Injection

@Autowired
public void setDependency1(Dependency1 dependency1){
    this.dependency1 = dependency1;
}

