Kafak - Open Source Distributed Event Sourcing Platform

Kafka Cluster - Set of brokers 
- Brokers are where actually kafka server is running

Zookeeper
- Moniters the health of kafka brokers


Kafka Connect
- To source some data from external sources to the Kafka clusters


Kafka Stream
- To transform some data from Kafka Cluster


-------------------------------------------------------------------------------------------------------------------------------

- Download the Kafka from the website 
- For mac just change the commands from .bat to .sh file


🟢 INSTALLATION COMMANDS

zookeeper-server-start.bat ..\..\config\zookeeper.properties   ---- Starting Zookeeper

kafka-server-start.bat ..\..\config\server.properties         ---- Starting Kafka Broker

kafka-topics.bat --create --topic my-topic --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3 (Creating Topic)

kafka-console-producer.bat --broker-list localhost:9092 --topic my-topic    ---- Starting Producer

kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic my-topic --from-beginning      ---- Starting Consumer




🟢 SENDING MESSAGES COMMANDS

zookeeper-server-start.bat ..\..\config\zookeeper.properties

kafka-server-start.bat ..\..\config\server.properties

kafka-topics.bat --create --topic foods --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4

kafka-console-producer.bat --broker-list localhost:9092 --topic foods --property "key.separator=-" --property "parse.key=true"

kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic foods --from-beginning -property "key.separator=-" --property "print.key=false"
