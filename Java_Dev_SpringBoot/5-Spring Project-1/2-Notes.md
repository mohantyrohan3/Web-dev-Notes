Architecture
- Theres a Front Controller after which it goes to Different Servlets(Controllers) and Views(JSP)


Whenever you want to retains values across multiple requests You can use Session

@SessionAttributes("Name")


----------------------------------------------------------------------------------------------------------------------------------

Server Side Validation --- Using Spring Boot Starter Validation

- Update in pom.xml (internet)


@Size(min = 10 , message = "Enter atleast 10 characters")

And just add @Valid in the method of controller

public String addTodo(ModelMap model , @Valid Todo todo , BindingResult result){
    if(result.hasErrors()){
        return ""
    }
}