# Only JPA

Queries can be complex while writing in jdbc
For that JPA comes


Firstly we will be mapping the object class directly to the table

- Make a Course Class 


@Entity
public class Course{

    @Id
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "author")
    private String author;

    // DEfault constructor
    // parametrized constructor

    getters and setters
}


- Now create a CourseRepository class 



@Component
@Transactional
public class CourseRepository{

    @Autowired
    private EntityManager entityManager;

    public void insert(Course course){
        entityManager.merge(course);
    }

    public Course findbyId(long id){
        entityManager.find(Course.class , id);
    }

    public void deletebyId(long id){
        Course course = entityManager.find(Course.class , id);
        entityManager.remove(course);
    }
}

