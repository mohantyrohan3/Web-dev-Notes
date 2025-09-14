Download And Setup Kafka

- https://kafka.apache.org/quickstart Use this web to follow the steps to Download



---------------------------------------------------------------------------------------------------------------------------------


Spring Boot Project for Kafka

- add Spring for Apache Kafka dependency


Configuring Kafka Producer and Consumer in Spring Boot



# Producers


in application.properties of Producers
- spring.kafka.bootstrap-servers=localhost:9092
- spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
- spring.kafka.producer.value-serializer=org.apache.kafka.common.serialization.StringSerializer




- A configuration file

@Configuration
public class KafkaProducerConfig {

    @Bean
    public ProducerFactory<String, String> producerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        return new DefaultKafkaProducerFactory<>(config);
    }

    @Bean
    public KafkaTemplate<String, String> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }


    
    @Bean
    public NewTopic testTopic() {
        // name, partitions, replicationFactor
        return new NewTopic("test-topic", 3, (short) 1);


        Or//
        return TopicBuilder.name("test-topic").partitions(10).build();
    }
}



- MessageProducer


@Component
public class MessageProducer {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void sendMessage(String topic, String message) {
        kafkaTemplate.send(topic, message);
    }

}



Rest Controller

@RestController
public class KafkaController {

    @Autowired
    private MessageProducer messageProducer;

    @PostMapping("/send")
    public String sendMessage(@RequestParam("message") String message) {
        messageProducer.sendMessage("my-topic", message);
        return "Message sent: " + message;
    }





# Consumer Side


application properties file


- spring.kafka.bootstrap-servers=localhost:9092
- spring.kafka.consumer.group-id=my-group
- spring.kafka.consumer.auto-offset-reset=earliest
- spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
- spring.kafka.consumer.value-deserializer=org.apache.kafka.common.serialization.StringDeserializer





Consumer Config


@EnableKafka
@Configuration
public class KafkaConsumerConfig {

    @Bean
    public ConsumerFactory<String, String> consumerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        config.put(ConsumerConfig.GROUP_ID_CONFIG, "my-group");
        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        return new DefaultKafkaConsumerFactory<>(config);
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, String> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, String> factory =
                new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        return factory;
    }
}




Consumer Listener

@Service
public class ConsumerService {

    @KafkaListener(topics = "test-topic", groupId = "my-group")
    public void consume(String message) {
        System.out.println("Consumed message: " + message);
    }
}