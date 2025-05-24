replaceAll - it takes a function if we want to replace something with all the values of List
removeIf - If we want to remove elements from the list if any specific conditions are met




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Java Thread Pool - Collection of pre initialized threads that are ready to perform a task

- Resource Management - Creating and Destroying new threads is resource extensive
- Response Time increases
- Control over thread count

Task Queueing: Tasks are added to a queue and executed by available threads.



Executors Framework  in Java  -  Its a package to simplify the dev of concurrent applications by abstracting away the complexity


Executors Framework has 3 major interfaces
- Executor
- ExecutorService
- ScheduledExecutorService


ExecutorService executor = Executors.newFixedThreadPool(3);   // 3 Threads will be created
executor.submit(() -> {
    // Runnable Interface Implementation
})


for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Executing Task " + taskId + " with Thread " + Thread.currentThread().getName());
            });
        }

// Shut down the executor
executor.shutdown();

executor.awaitTermination(time_out_miliseconds  , TimeUnit.SECONDS);


// For unlimited wait times
while(!executor.awaitTermination(1  , TimeUnit.SECONDS);){

}


Future<?> f = executor.submit(() -> {
    //
})


- we can also capture value from the submit using Future<>
- future.get();
- future.isDone(); 