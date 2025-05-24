Runnable vs Callable Difference 
Runnable - Doesnt returns any values , simply void function
Callable - Returns a value


List<Callable<Integer>> list = Arrays.asList(callable1 , callabl2 , callable3);

List<Future<Integer>> futures = executorService.invokeAll(list);



Scheduled Executor Service


ScheduledExecutorService service = Executors.newScheduledThreadPool(pool_size);


// After Particular Time
service.schedule(() -> {

} , 5 , TimeUnit.SECONDS);




// At a Fixed Rate
service.scheduleAtFixedRate(() -> {

} , 5 , 5(delay) ,  TimeUnit.SECONDS);


scheduler.schedule(() -> {
    scheduler.shutdown();
} , 20 , TimeUnit.SECONDS);



--------------------------------------------------------------------------------------------------------------------------------------------------------------------

CompletableFuture 
- Runs Asynchronously: Executes tasks in separate threads without blocking the main thread.
- Supports Chaining: Allows multiple tasks to run sequentially using .thenApply(), .thenAccept(), etc.



 CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            return "Hello, Async World!";
        });

        future.thenAccept(result -> System.out.println(result));

        // Ensures the program doesn't exit before task completion
        future.join();


        // Or Else SImply write
        future.get();