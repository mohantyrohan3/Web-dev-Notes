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

