Versioning

- First way to implement is using url

http:localhost:8080/v1/user
http:localhost:8080/v2/user


- Second way is using query params

http:localhost:8080/?version=1


@GetMapping
    public String getUsersByQueryParams(@RequestParam(required = false) Integer age,
                                        @RequestParam(required = false) String city) {
        return "Filtering users by age: " + age + ", city: " + city;
    }


- Another way of doing it is Custom headers versioning



--------------------------------------------------------------------------------------------------------------------------------------

HATEOS - Hypermedia as the Engine of Application State 

Along with the data, the API should also return links that tell the client what actions are possible next.

Instead of hardcoding the next URLs in the client, the server provides them dynamically.

It makes your API self-explaining and discoverable.


{
  "id": 1,
  "name": "Rohan",
  "email": "rohan@example.com",
  "_links": {
    "self": { "href": "/users/1" },
    "all-users": { "href": "/users" },
    "update": { "href": "/users/1" },
    "delete": { "href": "/users/1" }
  }
}


Step1
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-hateoas</artifactId>
</dependency>


Step 2 - Usage of EntityModel to wrap the domain object and add links

@GetMapping("/{id}")
    public EntityModel<User> getUser(@PathVariable Long id) {
        User user = new User(id, "Rohan", "rohan@example.com"); // Imagine fetching from DB

        EntityModel<User> resource = EntityModel.of(user);

        // Add self link
        resource.add(
            WebMvcLinkBuilder.linkTo(
                WebMvcLinkBuilder.methodOn(UserController.class).getUser(id)
            ).withSelfRel()
        ); 

        // Add link to all users
        resource.add(
            WebMvcLinkBuilder.linkTo(
                WebMvcLinkBuilder.methodOn(UserController.class).getAllUsers()
            ).withRel("all-users")
        );

        return resource;
    }



{
  "id": 1,
  "name": "Rohan",
  "email": "rohan@example.com",
  "_links": {
    "self": {
      "href": "http://localhost:8080/users/1"
    },
    "all-users": {
      "href": "http://localhost:8080/users"
    }
  }
}