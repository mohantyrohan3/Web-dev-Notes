First we will add Spring Data MongoDB dependency

- There are 2 ways Query Method DSL and Criteria API are 2 different ways to interact with a database when using Spring data jpa for relational databases and Spring Data MongoDB for mongodb databases

- Query Method DSL is a simple and convinient way to create queries based on method naming conventions , while the criteria api offers a more dynamic and programmatic approach for building complex and custom queries


First open up application.properties file

spring.data.mongodb.host = localhost
spring.data.mongodb.port = 27017
spring.data.mongodb.database = userDB  // automatically gets created
spring.data.mongodb.username = 
spring.data.mongodb.password = 
spring.data.mongodb.authentication-database=admin


then make a repository

public interface JournalRepository extends MongoRepository<JournalEntry , Long>{

}


in Journal Entry class make it a @Document 

- Then make a service 


public class JournalEntryService {

    @Autowired
    private JournalRepository repo;


}

- Always try to keep id as ObjectId type 

Different Functions/Methods of service

repo.save();  // If same id is being provided it will not create new , instead change the old one

repo.findAll();


repo.findById(id); 


repo.deleteById(id); 