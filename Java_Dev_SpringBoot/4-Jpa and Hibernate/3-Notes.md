Spring Data JPA - Even More simpler than JPA , Dont have to worry about EntityManager


Create a Spring Data JPA repository

public interface CourseSpringDataJpaRepository extends JpaRepository<Course , Long>{

}


Now we dont have to make any methods by ourself
Directly Autowire


@Autowired
private CourseSpringDataJpaRepository repository;


repository.save();
repository.findById(1l);
repository.deleteById(2l);
repository.findAll();
repository.count();



- You can also write custom methods


public interface CourseSpringDataJpaRepository extends JpaRepository<Course , Long>{
    List<Course> findByAuthor(String author);
}



# this will be same


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