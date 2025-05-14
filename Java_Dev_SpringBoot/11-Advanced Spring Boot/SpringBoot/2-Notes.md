MongoDB Relationships


- In Mongodb relationships , there is no automatic cascading delete , we have to manually delete it


@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String name;

    @DBRef
    private List<Post> posts; // Reference to posts collection

    // Getters and Setters
}




@Document(collection = "posts")
public class Post {
    @Id
    private String id;
    private String content;
    
    @DBRef
    private User user; // Reference to user collection

    // Getters and Setters
}


- Service for Insertion , Updation and Deletion



@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Post addPostToUser(String userId, Post post) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            post.setUser(user);
            postRepository.save(post);

            user.getPosts().add(post);  // Adding reference in User
            userRepository.save(user);

            return post;
        }
        return null;
    }

    public User updateUser(String userId, User updatedUser) {
        if (userRepository.existsById(userId)) {
            updatedUser.setId(userId);
            return userRepository.save(updatedUser);
        }
        return null;
    }

    public boolean deleteUser(String userId) {
    if (userRepository.existsById(userId)) {
        // Find the user first
        User user = userRepository.findById(userId).orElse(null);
        
        if (user != null) {
            // Delete all associated posts
            postRepository.deleteAll(user.getPosts());  
            
            // Delete the user
            userRepository.deleteById(userId);
            return true;
        }
    }
        return false;
    }
}