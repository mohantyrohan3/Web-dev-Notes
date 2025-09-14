Kafak Topic - Named Container for similar events

- A topic is partitioned and distributed to kafka brokers in round robin fashion to achieve distributed system
- Partition can be called as a Queue


Partition is where actually the message is located inside the topic
- Each partition is independent of each other


- If we dont provide key with our message , then it will go to different partitions based on round robin fashion
- If we want to store message in a single partition , then we will have to provide the key


kafka-console-producer.bat --broker-list localhost:9092 --topic foods --property "key.separator=-" --property "parse.key=true"
- here key-message


kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic foods --from-beginning -property "key.separator=-" --property "print.key=false"



----------------------------------------------------------------------------------------------------------------------------------


Consumer Offset - Position of a consumer in a specfic position of a topic
- It represents the latest message the consumer has read


When the consumer group reads messages from a topic , each member of the group maintains its own offset and updates it as it consumes messages



__consumer_offset is a built in topic in Apache Kafka that keeps track of the latest offset commited for each partition of each consumer group

- The __consumer_offset is used to store the current offset of each consumer in the each partiion for a given consumer group

----------------------------------------------------------------------------------------------------------------------------------

When a consumer joins a consumer group , it sends a join request to the group coordinator 
- The group coordinator determines which partition the consumer should be assigned based on the number of consumers in the group and the current assignment of partitions to consumers



The actual data is stored in
- logs.dirs =     in the server.properties file



Retention Policy - At what point we should delete data
- Size based - We can define a size , after exceeding the size we can delete previous data
- Time based - After certain time , Ex 7 days before data should be deleted 


