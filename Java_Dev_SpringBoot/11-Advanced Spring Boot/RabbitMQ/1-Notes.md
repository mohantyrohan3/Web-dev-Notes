Rabbit Mq - Message Broker between 2 or more microservices


Exchange - is a crucial component responsible for routing messages to the appropriate queues based on predefined rules.

Routing logic: The exchange evaluates routing rules and directs messages to one or more queues based on bindings.

Types of exchanges: RabbitMQ supports different types:

- Direct exchange: Routes messages to queues based on an exact match of a routing key.

- Fanout exchange: Broadcasts messages to all bound queues, regardless of the routing key.

- Topic exchange: Uses wildcard-based routing, allowing flexible matching of routing keys.

- Headers exchange: Routes messages based on header attributes rather than a routing key.


Queue - Once a message is read , it is consumed and removed from the queue , Thus a message can thus processed exactly once



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Creating a Queue
- GO to management console and then simply click on queue and give a name and queue will be created

Creating an Exchange 
- Go to exchange and then create by providing a name

- Bind the exchange to the queue by providing an routing key


To publish the message

- go to exchanges and click on publish message
- provide the routing key
- in payload , provide the message



https://rameshfadatare.medium.com/spring-boot-microservices-with-rabbitmq-example-92a38cbe08fc