Spring Boot Applicationn

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>

implementation 'org.springframework.boot:spring-boot-starter-amqp'

Add this dependency




- Add RabbitMQ configuration properties in application.properties

spring.rabbitmq.host=localhost
spring.rabbitmq.port=5672
spring.rabbitmq.username=guest
spring.rabbitmq.password=guest



For cloudapmq

spring.rabbitmq.virtual-host=vvecyvwz

spring.rabbitmq.host=cow.rmq2.cloudamqp.com
spring.rabbitmq.username=vvecyvwz
spring.rabbitmq.password=mypassword
spring.rabbitmq.port=5672


optionally
spring.rabbitmq.addresses=amqps://vvecyvwz:mypassword@cow.rmq2.cloudamqp.com/vvecyvwz


- Add Configuration

@Configuration
public class RabbitMQConfig {

    public static final String QUEUE_NAME = "exampleQueue";

    @Bean
    public Queue exampleQueue() {
        return new Queue(QUEUE_NAME, false);
    }


    @Bean
    public TopicExchange exchange(){
        return new TopicExchange("exchange_name");
    }

    @Bean
    public Binding binding(){
        return BindingBuilder.bind(queue())
            .to(exchange())
            .with("routingKey");
    }

}



- Creating service


@Service
public class MessageProducer {

    private final RabbitTemplate rabbitTemplate;

    public MessageProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendMessage(String message) {
        rabbitTemplate.convertAndSend(RabbitMQConfig.QUEUE_NAME, message);
        rabbitTemplate.convertAndSend(exchange_key , routingKey , message);
    }
}




- Rest COntroller for sending the message

@RestController
public class MessageController {

    private final MessageProducer messageProducer;

    public MessageController(MessageProducer messageProducer) {
        this.messageProducer = messageProducer;
    }

    @GetMapping("/send")
    public String sendMessage(@RequestParam String message) {
        messageProducer.sendMessage(message);
        return "Message sent: " + message;
    }
}




- In Consumer Microservice

@Configuration
public class RabbitMQConfig {

    public static final String QUEUE_NAME = "exampleQueue";

    @Bean
    public Queue exampleQueue() {
        return new Queue(QUEUE_NAME, false);
    }

    @RabbitListener(queues = QUEUE_NAME)
    public void listen(String message) {
        System.out.println("Received message: " + message);
    }
}