ORM vs JPA vs Persistance Providers vs Spring Data JPA vs Hibernate vs JDBC

ORM - ORM is a technique that allows developers to map Java objects to database tables. It eliminates the need for writing complex SQL queries by enabling interaction with the database using objects.

JPA - JPA is a Java standard for ORM, providing an abstraction for database operations. JPA defines how Java objects should be stored, retrieved, and managed in a relational database

Persistance Provider - A persistence provider is an implementation of JPA that provides the actual ORM functionality. Hibernate is an example


Hibernate - Hibernate is a JPA persistence provider and an advanced ORM framework.


Spring Data JPA - Spring Data JPA is a Spring module that makes working with JPA even easier. Reduces the amount of custom queries needed for database operations


JDBC - JDBC is the low-level API for connecting Java applications directly to databases using SQL queries.



# Spring Data JPA uses Hibernate internally as its JPA provider, so in a Spring Boot project, you generally use Spring Data JPA while Hibernate handles the actual ORM logic.


---------------------------------------------------------------------------------------------------------------

Handeling Custom Responses in Spring Boot - https://medium.com/@kodefyi/spring-boot-excercise-custom-json-response-with-responseentity-2fd183514b64