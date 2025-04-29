@Before - Do something before a method is called
@After - Do something after a method is executed irrespective of whether method executed successfully or throws a exception

@AfterReturning - Only after successfull execution
@AfterThrowing - Only after throwing exception



@After("execution(* PACKAGE_NAME.*.*(..))")
    public void logMethodcall(JoinPoint joinPoint){

        logger.info("Method is called" + joinPoint);
    }


@AfterReturning(
    pointcut = "",
    returning = "resultValue"
)
public void (JointPoint jointPoint , Object resultValue){

}


-------------------------------------------------------------------------------------------------------------------


@Around  --- Do something before and after a method execution


JointPoint - does not allows to execute the method
ProceddingJoingPoint - does allows to execute the method

procjointpoint.proceed();

always return the returnValue


-------------------------------------------------------------------------------------------------------------------

To avoid changing package name at multiple places

we can create a another class

public class CommonPointCutConfig{

    @PointCut("Actual Package name ")
    public void dataPackage(){}

    @PointCut("Actual Package name ")
    public void businessPackage(){}

}


public class ActualLoggingAspect{

    @Before("CommonPointCutConfig.dataPackage()") // Only change
}