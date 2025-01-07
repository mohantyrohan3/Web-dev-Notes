Path Variable


@GetMapping("/hello/{name}")
public HelloWorldBean(@PathVariable String name){
    return ""
}