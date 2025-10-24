Caching - Reduce Latency , Decrease Load , Improve Scalability


First add EnableCaching annotation

@Configuration
@EnableCaching
public class AppConfig{

}


- To cache the value of a Method we can use Cacheable annotation

@Cacheable("name")
public ResponseEntity<?> someMethod(){

}



Types of Cache
- In Memory  - Part of Application , In Memory or heap memory , Cleared when server stops
- Distributed - Outside Application , Redis



@CachePut("name")
// Any  update logic , so that changes made inside Database also should be reflected back in the cache

@CacheEvict("name")
