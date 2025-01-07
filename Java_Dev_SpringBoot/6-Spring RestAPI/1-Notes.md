Path Variable


@GetMapping("/hello/{name}")
public HelloWorldBean(@PathVariable String name){
    return ""
}


Resource Not Found - 404
Server side error - 500
Validation Error - 400

Important Response Statuses
200 - Sucess
201 - created
401 - Unauthorized



To provide different statuses we can use 

ResponseEntity.created(null).build();


-------------------------------------------------------------------------------------------------------------



- springdoc-openapi java library helps to automate the generation of API documentation for spring boot projects. 

simply add in the dependency and go to localhost:8080/swagger-ui.html


----------

Content Negotiation
- If the user wants to get the information in the form of xml or json

add the dependency
- jackson-dataformat-xml

Now while making a request if we add application/xml in the header we will get the response in the form of xml


-------------------------------------

Internationalization - i18n
- To serve customers from different part of the world


