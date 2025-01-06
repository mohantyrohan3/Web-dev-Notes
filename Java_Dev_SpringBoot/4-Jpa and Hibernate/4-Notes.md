Using MySQL with Spring Data JPA and Hibernate

Dependencies - Spring Web , Spring Data JPA , MySql Driver

In Applicatio.properties folder

spring.datasource.url=jdbc:mysql://localhost:port_no/database_name
spring.datasource.username = 
spring.datasource.password = 



@PostMapping("/remove/{id}")
public boolean delete(@PathVariable("id") Integer id){
    // Logic
}



    - Using Parameters from the body instead
    @PostMapping
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        Item savedItem = itemRepository.save(item);
        return ResponseEntity.ok(savedItem);
    }