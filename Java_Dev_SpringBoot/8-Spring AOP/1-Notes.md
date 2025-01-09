AOP - Aspect Oriented Programming
A layered approach is typically used , A web layer , Business layer , data layer

However there are a few common aspects that apply to all the layers
Security
Performance
Logging
These are called Cross Cutting Concerns

AOP is used to implement Cross Cutting Concerns
2 Popular AOP frameworks are Spring AOP (Populary Used)
Aspect J(Rarely used)


-------------------------------------------


Start by adding " spring-boot-starter-aop "   dependency 




@Configuration
@Aspect
public class LoggingAspect {

    private Logger logger = LoggerFactory.getLogger(getClass());


    // execution(* PACKAGE_NAME.*.*(..))

    @PointCut("execution(* PACKAGE_NAME.*.*(..))")
    public void logMethodcall(JoinPoint joinPoint){

        logger.info("Method is called" + joinPoint);
    }



    // Before the method call 
    @Before("execution(* PACKAGE_NAME.*.*(..))")
    public void logMethodcall(JoinPoint joinPoint){

        logger.info("Method is called" + joinPoint);
    }
}


------------------------------------------------------------------------------------------------------------------------------

Advice - What code to execute
PointCut - Expression that identifies method calls to be intercepted

Aspect - A combination of Advice and Pointcut