2 Microservices Setup of Micrometer + Prometheus + Grafana 

Metrics to be added
http_server_requests_seconds_count	Total number of requests handled
http_server_requests_seconds_sum	Total request duration (used for latency)
jvm_memory_used_bytes	JVM memory used during load
process_cpu_usage	CPU load during test



- Add Actuator + Prometheus

- Add in the Application.properties / application.yaml 
<!-- management:
  endpoints:
    web:
      exposure:
        include: health, metrics, prometheus
  endpoint:
    prometheus:
      enabled: true
  metrics:
    export:
      prometheus:
        enabled: true -->

management.endpoints.web.exposure.include=health, metrics, prometheus
management.endpoint.prometheus.enabled=true
management.prometheus.metrics.export.enabled=true




- add Prometheus config file (prometheus.yaml)

global:
  scrape_interval: 5s  # how often Prometheus pulls data
  evaluation_interval: 5s

scrape_configs:
  - job_name: 'service1'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['service1:8080']   # use container name or host:port
        labels:
          application: 'Service 1'

  - job_name: 'service2'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['service2:8081']
        labels:
          application: 'Service 2'




- Mount directly in docker-compose.yaml file

services:
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml




- Auto Load dashboards 

grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - ./dashboards:/var/lib/grafana/dashboards
      - ./datasource.yml:/etc/grafana/provisioning/datasources/datasource.yml
      - ./dashboard.yml:/etc/grafana/provisioning/dashboards/dashboard.yml



- datasource.yml

apiVersion: 1

datasources:
  - name: Prometheus
    type: prometheus
    access: proxy
    orgId: 1
    url: http://prometheus:9090
    isDefault: true
    editable: true


- dashboard.yml

apiVersion: 1

providers:
  - name: 'Local Dashboards'
    orgId: 1
    folder: ''
    type: file
    disableDeletion: false
    editable: true
    options:
      path: /var/lib/grafana/dashboards




- Now simply import the dashboard
Keep the file in a dashboards folder

{
  "id": null,
  "title": "Microservice Load Test Performance",
  "tags": ["load-test", "microservices"],
  "timezone": "browser",
  "schemaVersion": 36,
  "version": 2,
  "refresh": "5s",

  "templating": {
    "list": [
      {
        "name": "application",
        "label": "Application",
        "type": "query",
        "datasource": "Prometheus",
        "query": "label_values(application)",
        "refresh": 1,
        "current": {
          "text": "All",
          "value": ".*"
        },
        "includeAll": true,
        "multi": true
      }
    ]
  },

  "panels": [
    {
      "type": "graph",
      "title": "Request Rate (req/s)",
      "targets": [
        {
          "expr": "rate(http_server_requests_seconds_count{application=~\"$application\"}[1m])",
          "legendFormat": "{{application}} {{method}} {{uri}}",
          "refId": "A"
        }
      ],
      "id": 1,
      "gridPos": { "x": 0, "y": 0, "w": 12, "h": 8 }
    },
    {
      "type": "graph",
      "title": "Average Response Time (seconds)",
      "targets": [
        {
          "expr": "rate(http_server_requests_seconds_sum{application=~\"$application\"}[1m]) / rate(http_server_requests_seconds_count{application=~\"$application\"}[1m])",
          "legendFormat": "{{application}} {{method}} {{uri}}",
          "refId": "B"
        }
      ],
      "id": 2,
      "gridPos": { "x": 12, "y": 0, "w": 12, "h": 8 }
    },
    {
      "type": "graph",
      "title": "CPU Usage (%)",
      "targets": [
        {
          "expr": "process_cpu_usage{application=~\"$application\"} * 100",
          "legendFormat": "{{application}} CPU",
          "refId": "C"
        }
      ],
      "id": 3,
      "gridPos": { "x": 0, "y": 8, "w": 12, "h": 8 }
    },
    {
      "type": "graph",
      "title": "JVM Memory Used (MB)",
      "targets": [
        {
          "expr": "jvm_memory_used_bytes{application=~\"$application\"} / 1024 / 1024",
          "legendFormat": "{{application}} Memory",
          "refId": "D"
        }
      ],
      "id": 4,
      "gridPos": { "x": 12, "y": 8, "w": 12, "h": 8 }
    }
  ]
}