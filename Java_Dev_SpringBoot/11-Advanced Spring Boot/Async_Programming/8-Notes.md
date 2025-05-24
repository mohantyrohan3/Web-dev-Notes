Async Operation In Spring Boot


Async - Used to mark a method that should run asynchronously
Runs In a new thread , without blocking the main thread


@EnableAsync - in the main function

@Async - In the method

- If we are not providing any Executor , It uses its own Deafault Executor
- Else we can also give our own custom executor


# ExecutorService
@Configuration
public class CustomExecutorConfig {

    @Bean
    public ExecutorService taskExecutor() {
        return Executors.newFixedThreadPool(5); // Pool with 5 threads
    }
}



# Proving the Wrapper of Spring Task Executor
@Configuration
@EnableAsync
public class AsyncConfig {

    private final ExecutorService executorService;

    public AsyncConfig(ExecutorService executorService) {
        this.executorService = executorService;
    }

    @Bean(name = "customAsyncExecutor")
    public ConcurrentTaskExecutor getAsyncExecutor() {
        return new ConcurrentTaskExecutor(executorService);
    }
}




# Using the Async
@Service
public class AsyncService {

    @Async("customAsyncExecutor")
    public void performAsyncTask() {
        System.out.println("Executing task in thread: " + Thread.currentThread().getName());
    }
}



# Calling Follow Up Functions after Thread completion


@Service
public class AsyncService {

    @Async("customAsyncExecutor")
    public CompletableFuture<String> performAsyncTask() {
        System.out.println("Executing task in thread: " + Thread.currentThread().getName());
        
        // Simulate processing delay
        try { Thread.sleep(2000); } catch (InterruptedException e) { e.printStackTrace(); }
        
        return CompletableFuture.completedFuture("Task Completed!");
    }
}



public void triggerFollowUpTask() {
    CompletableFuture<String> future = asyncService.performAsyncTask();
    
    future.thenAccept(result -> {
        System.out.println("Executing follow-up task after: " + result);
    });
}