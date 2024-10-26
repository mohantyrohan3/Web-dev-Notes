# Mainly Used for Caching

1. First create account and make a database in redis website and download the user interface for redis and connect with the database from the website

2. GET name , SET name "Rohan"
3. SET updates if it exists , SETNX doest do anything if key is already present
4. DEL key_name

5. Lists - RPUSH,LPUSH , LMOVE , LTRIM
6. Hashes - HSET key_name key1 value1  key2 value2  ,,, 


For using in Node js

1. First install ioredis
2. 

const Redis = require("ioredis");
new Redis({
  port: 6379, // Redis port
  host: "127.0.0.1", // Redis host
  username: "default", // needs Redis >= 6
  password: "my-top-secret",
  db: 0, // Defaults to 0
});


redis.set("mykey", "value");

redis.get("mykey", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Prints "value"
  }
});



 const user = {
    name: "Bob",
    // The field of a Redis Hash key can only be a string.
    // We can write `age: 20` here but ioredis will convert it to a string anyway.
    age: "20",
    description: "I am a programmer",
  };

  await redis.hset("user-hash", user);

  const name = await redis.hget("user-hash", "name");
  console.log(name); // "Bob"