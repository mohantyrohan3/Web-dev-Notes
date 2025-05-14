@DbRef - for MongoDB relationships

@Transactional - for rollbacks on exceptions
@Enabletransactionmanagement - at the main function


@Bean
    MongoTransactionManager transactionManager(MongoDatabaseFactory dbFactory) {
        return new MongoTransactionManager(dbFactory);
    }

Just add this code in the main function


