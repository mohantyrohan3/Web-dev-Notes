Prometheus - Monitoring System - Collects Metrices like cpu , latency etc
Micrometer - Prometheus UI CLient  - Pushes the Metrices to the Prometheus server
Grafana - UI Dashboards showing the data from Prometheus Server



Add Dependencies
- Spring Actuator
- Prometheus



Add in the application.properties file

- management.endpoints.web.exposure.include = prometheus

check 
- localhost:8080/actuator/prometheus



Add This in the docker-compose.yaml file
- This is nothing but the docker image to pull and run the container containing Prometheus Server
services:
  prometheus:
    image: prom/prometheus:v2.35.0
    network_mode: host
    container_name: prometheus
    restart: unless-stopped
    volumes:
      - ./data/prometheus/config:/etc/prometheus/
    command:
      - '--config.file=/etc/prometheus/prometheus.yaml'



- prometheus.yaml - config file 

scrape_configs:
  - job_name: 'Spring Boot Application input'
    metrics_path: '/actuator/prometheus'
    scrape_interval: 2s
    static_configs:
      - targets: ['localhost:8080']
        labels:
          application: 'My Spring Boot Application'



Grafana
- add this in docker-compose.yaml file
grafana:
  image: grafana/grafana-oss:8.5.2
  pull_policy: always
  network_mode: host
  container_name: grafana
  restart: unless-stopped
  volumes:
    - ./data/grafana:/var/lib/grafana
  environment:
    - GF_SECURITY_ADMIN_PASSWORD=admin
    - GF_SERVER_DOMAIN=localhost




