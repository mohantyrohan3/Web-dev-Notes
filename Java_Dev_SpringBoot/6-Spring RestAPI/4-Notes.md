Customizing Rest API Responses 

- Many times You dont want to entirely send the Domain Object , You want to selectively send the attributes


- Writing JSONProperty("") to give custom names

@JSONProperty("name_of_user")
String User


- Filtering


Static Filtering - Ignore the field across all the rest apis
- To implement Static Filtering - we can use @JsonIgnore annotation to ignore the field 


Dynamic Filtering



@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public MappingJacksonValue getUserById(@PathVariable Long id) {
        User user = new User(id, "Rohan", "rohan@example.com", "secret123");

        // Only include id, name, and email, no password
        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter
                .filterOutAllExcept("id", "name", "email");

        FilterProvider filters = new SimpleFilterProvider()
                .addFilter("UserFilter", filter);

        MappingJacksonValue mapping = new MappingJacksonValue(user);
        mapping.setFilters(filters);

        return mapping;
    }
}