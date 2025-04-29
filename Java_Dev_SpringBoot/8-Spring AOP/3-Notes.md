Creating Custom Annotation

// src/main/java/com/example/aop/TrackTime.java
package com.example.aop;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface TrackTime {
}


Business Service

package com.example.business;

import com.example.aop.TrackTime;
import org.springframework.stereotype.Service;

@Service
public class MyService {

    @TrackTime
    public void doWork() throws InterruptedException {
        Thread.sleep(1000); // Simulate work
        System.out.println("Work completed");
    }
}




@Aspect
@Component
public class BusinessConfig {

    @Pointcut("@annotation(com.example.aop.TrackTime)")
    public void trackTimeAnnotation() {}
}




@Around("com.example.aop.BusinessConfig.trackTimeAnnotation()")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();

        Object value = joinPoint.proceed(); // Proceed to the method

        long end = System.currentTimeMillis();

        System.out.println("Method [" + joinPoint.getSignature() + "] executed in " + (end - start) + " ms");

        return value;
    }