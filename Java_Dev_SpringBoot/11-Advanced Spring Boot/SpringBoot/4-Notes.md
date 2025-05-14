Advanced MongoDB Concepts


AND operator - List<Student> findByNameAndEmail(String name , String email);  in student repository

OR operator - List<Student> findByNameOrEmail(String name , String email);



Pagination

List<Student> getAllWithPagination(int pageNo , int pageSize){
    Pageable pageable = PageRequest.of(pageNo - 1 , pageSize);

    return studentRepo.findAll(pageable).getContent();
}



Like Query - like in sql

List<Student> findByEmailIsLike(String email);



Starts with

List<Student> findByNameStartsWith(String name);


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------