Redis Cache

Setup the Docker and Install redis there

- Add Spring Data Redis (Access+Driver)  dependency


In Application.properties
- spring.cache.type=redis
- spring.data.redis.host=localhost
- spring.data.redis.port=6379
- spring.cache.cache-names=weather



- All the other functionality is same 

