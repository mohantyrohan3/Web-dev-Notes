RabbitMQ - Json Converter for sending Custom Messages

- Pick MessageConverter from org.springframework.amqp.support.converter package

@Bean
public MessageConverter coverter(){
    return new Jackson2JsonMessageConverter();
}




@Bean
public AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory) {
    RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
    rabbitTemplate.setMessageConverter(jsonMessageConverter());
    return rabbitTemplate;
}


- Then in the @Service

@Autowired
private AmqpTemplate rabbitTemplate;




- In the recieving side

- In the Configuration class
 @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }




- In the controller/listener class
@RabbitListener(queues = RabbitConfig.QUEUE)
    public void handleUserMessage(User user) {
        System.out.println("Received user: " + user.getName() + ", age: " + user.getAge());
    }