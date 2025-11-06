Kafka Setup


- First we have to add Kafka Docker setup in the docker-compose.yaml file


kafka-brokerbench:
    image: apache/kafka:3.7.0
    container_name: kafka-brokerbench
    hostname: kafka
    ports:
      - "9092:9092"
    environment:
      KAFKA_NODE_ID: 1
      KAFKA_PROCESS_ROLES: broker,controller
      KAFKA_LISTENERS: PLAINTEXT://:9092,CONTROLLER://:9093
      KAFKA_CONTROLLER_LISTENER_NAMES: CONTROLLER
      KAFKA_CONTROLLER_QUORUM_VOTERS: 1@kafka:9093
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_CFG_ALLOW_PLAINTEXT_LISTENER: "yes"
    networks:
      - broker-net



- Since Kafka doesnt automatically adds the metrics to Prometheus server , Its send in the format of JMX
- So we need a Exporter for converting the JMX to Prometheus
- We use External JMX Exporters


kminion-exporter-brokerbench:
    image: redpandadata/kminion:latest
    container_name: kminion-exporter-brokerbench
    ports:
      - "9999:8080"
    environment:
      KAFKA_BROKERS: kafka-brokerbench:9092
      KMINION_GROUPS_ALLOW_REGEX: ".*"
    # command:
    #   - -c
    #   - |
    #     echo "⏳ Waiting for Kafka broker to be ready on kafka:9092..."
    #     until nc -z kafka 9092; do
    #       echo "Kafka not ready yet... retrying in 5s"
    #       sleep 5
    #     done
    #     echo "✅ Kafka is up! Starting kafka-exporter..."
    depends_on:
      - kafka-brokerbench
    restart: always
    networks:
      - broker-net



- Then add in prometheus.yml file to make it know from which port to scrape the data

- job_name: 'kafka-brokerbench'
    static_configs:
      - targets: ['kafka-jmx-exporter:9308']
        labels:
          application: 'kafka-brokerbench'
    
  - job_name: 'kminion'
    static_configs:
      - targets: ['kminion-exporter-brokerbench:8080']




Then add Dashboards

- Simply go to Grafana hub , export it 
- Edit based on needs