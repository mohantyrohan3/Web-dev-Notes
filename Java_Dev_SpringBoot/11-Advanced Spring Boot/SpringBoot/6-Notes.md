MongoTemplate - 


@Autowired
private MongoTemplate mongotemplate;


Query query = new Query();
query.addCriteria(Criteria.where("name").is("value"));
mongotemplate.find(query , User.class);



query.addCriteria(Criteria.where("name").gte("value"));   --- Greater than equal to
query.addCriteria(Criteria.where("name").exists("value"));   --- Exists
query.addCriteria(Criteria.where("name").ne("value"));   --- Not Equal to

.in 
.nin (not in)