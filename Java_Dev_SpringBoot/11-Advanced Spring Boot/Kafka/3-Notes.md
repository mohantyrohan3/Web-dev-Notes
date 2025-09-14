Creating a cluster

- First copy the server.properties file and create as many brokers you want to include in the cluster
- Then modify the id ,  port , logs directory in each .properties file
- Start it and they all belong to a single cluster


Replication factor gives us fault tolerance



Integeration with Spring Boot


- We will use Confluent Kafka cloud
- Login  and then make a new topic

- Configure a client and click on Spring boot
- Just follow the steps




Open a new Spring boot Project
- add the "Spring for Apache Kafka "   dependency



kafka:
    bootstrap-servers: ${KAFKA_SERVERS}
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer
    consumer:
      group-id: weekly-sentiment-group
      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer
      properties:
        spring:
          json:
            trusted:
              packages: net.engineeringdigest.journalApp.model
    properties:
      security:
        protocol: SASL_SSL
      sasl:
        mechanism: PLAIN
        jaas:
          config: org.apache.kafka.common.security.plain.PlainLoginModule required username='X' password='X';
      session:
        timeout:
          ms: 45000