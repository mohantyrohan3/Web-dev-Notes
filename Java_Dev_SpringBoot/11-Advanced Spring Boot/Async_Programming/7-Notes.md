1. Creating & Completing Futures
        
        
supplyAsync(Supplier<T>)
Runs an async task that returns a result.
    
    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "Hello, Async!");
    System.out.println(future.join()); // "Hello, Async!"
    
    
    
    
    
runAsync(Runnable)
Runs an async task without returning a result.

    CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
        System.out.println("Running async task...");
    });
    future.join();




complete(T)
Manually completes a future with a value.

    CompletableFuture<String> future = new CompletableFuture<>();
    future.complete("Completed manually!");
    System.out.println(future.join()); // "Completed manually!"





2. Transforming the Result



thenApply(Function<T, R>)
Transforms the result and returns a new CompletableFuture.

    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "Hello")
        .thenApply(result -> result + " World!");
    System.out.println(future.join()); // "Hello World!"
    
    
    
    
thenAccept(Consumer<T>)
Consumes the result without returning a new future.

    CompletableFuture.supplyAsync(() -> "Processing data")
        .thenAccept(System.out::println); // Prints "Processing data"





thenRun(Runnable)
Runs a task after completion, but doesn't get the result.


    CompletableFuture.supplyAsync(() -> "Done")
        .thenRun(() -> System.out.println("Task finished!"));





3. Handling Multiple Async Tasks




thenCombine(CompletableFuture<T>, BiFunction<T, U, R>)
Combines results from two futures.

    CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "Hello");
    CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "World");

    CompletableFuture<String> combined = future1.thenCombine(future2, (f1, f2) -> f1 + " " + f2);
    System.out.println(combined.join()); // "Hello World"



thenCompose(Function<T, CompletableFuture<R>>)
Chains multiple async tasks.


    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "Step 1")
        .thenCompose(result -> CompletableFuture.supplyAsync(() -> result + " -> Step 2"));
    System.out.println(future.join()); // "Step 1 -> Step 2"




allOf(CompletableFuture<?>...)
Waits for all tasks to complete.

    CompletableFuture<Void> allTasks = CompletableFuture.allOf(
        CompletableFuture.runAsync(() -> System.out.println("Task 1")),
        CompletableFuture.runAsync(() -> System.out.println("Task 2"))
    );
    allTasks.join();
    System.out.println("All tasks finished!");




anyOf(CompletableFuture<?>...)
Completes when any future finishes.


    CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "First");
    CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "Second");

    CompletableFuture<Object> firstCompleted = CompletableFuture.anyOf(future1, future2);
    System.out.println(firstCompleted.join()); // Either "First" or "Second"



4. Handling Errors
exceptionally(Function<Throwable, T>)
Handles exceptions gracefully.


    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
        if (true) throw new RuntimeException("Oops!");
        return "Success!";
    }).exceptionally(ex -> "Error: " + ex.getMessage());

    System.out.println(future.join()); // "Error: Oops!"



handle(BiFunction<T, Throwable, R>)
Handles both result and exceptions.


    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
        if (true) throw new RuntimeException("Something went wrong!");
        return "Success!";
    }).handle((result, ex) -> ex == null ? result : "Recovered from error");

    System.out.println(future.join()); // "Recovered from error"






5. Waiting for Results



join()
Blocks until the future completes.
    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "Finished!");
    System.out.println(future.join()); // "Finished!"



get(timeout, unit)
Waits for completion with a timeout.

    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "Task done");
    System.out.println(future.get(2, TimeUnit.SECONDS)); // "Task done"