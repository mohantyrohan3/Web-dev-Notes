- Just enable the plugin in docker-compose.yaml
- It automatically provides metrics

rabbitmq:
  image: rabbitmq:3.13-management
  container_name: rabbitmq-brokerbench
  ports:
    - "5672:5672"    # AMQP
    - "15672:15672"  # Management UI
    - "15692:15692"  # Prometheus metrics endpoint
  environment:
    RABBITMQ_DEFAULT_USER: admin
    RABBITMQ_DEFAULT_PASS: admin

- http://localhost:15692/metrics , check it here



- Add RabbitMQ to your prometheus.yml 


- job_name: 'rabbitmq-brokerbench'
    metrics_path: '/metrics'
    static_configs:
      - targets: ['rabbitmq-brokerbench:15692']
        labels:
          application: 'rabbitmq-brokerbench'




- Now add add Panels to Grafana Dashboard

- Add this in the dashboards.yml


  - name: 'Brokers Dashboard'
    orgId: 1
    folder: ''
    type: file
    disableDeletion: false
    editable: true
    options:
      path: /var/lib/grafana/dashboards