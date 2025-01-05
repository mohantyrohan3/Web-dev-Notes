Build a new project with spring web , Spring Data JDBC , Spring data JPA , H2 database


spring.h2.console.enabled=true
write in in application.properties to view the h2 console

Configure a static url by writing
# spring.datasource.url=jdbc:h2:mem:testdb in application.prooerties

Now make a schema.sql in resources folder for creating a table in h2 database




Create a new Class

@Repository
public class SpringJdbcController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static String INSERT_QUERY = """
            INSERT INTO students VALUES (1,"Learn Aws1" , "Author2")
            """;

    public void insert(){
        jdbcTemplate.update(INSERT_QUERY);
    }
}


# To run the query at the start of the application

@Component
public class CourseJdbcCommandLineRunner implements CommandLineRunner {


    @Autowired
    private SpringJdbcController springJdbcController;


    @Override
    public void run(String... args) throws Exception {
        springJdbcController.insert();
    }
}