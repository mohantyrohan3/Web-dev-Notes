Many to One mapping



- User 
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    // One User can have many Posts
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Post> posts = new ArrayList<>();

    // Constructors
    public User() {}

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters and Setters

    public void addPost(Post post) {
        posts.add(post);
        post.setUser(this); // important to set the relationship from both sides
    }

    public void removePost(Post post) {
        posts.remove(post);
        post.setUser(null);
    }

    // Other Getters and Setters
}



- Post
@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;

    // Many posts belong to one User
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id") // foreign key in posts table
    @JsonIgnore
    private User user;

    // Constructors
    public Post() {}

    public Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

    // Getters and Setters

    public void setUser(User user) {
        this.user = user;
    }

    // Other Getters and Setters
}




import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}


import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}


- Service

@Service
public class BlogService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Transactional
    public void createPostForUser(Long userId, String title, String content) {
        User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));

        Post post = new Post(title, content);

        user.addPost(post);

        userRepository.save(user); // because of cascade = ALL, post is saved too
    }
}


- When you save the User, because of cascade = CascadeType.ALL, the associated Post is also saved automatically!





class Rohan{
    public static void main(String [] args){
        System.out.println("Rohan is a good boy");
    }
}