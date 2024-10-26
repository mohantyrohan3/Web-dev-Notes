// Itertating over Objects

var student = {
    name:"rohan",
    rollno:120,
    marks:80
};

var keys = Object.keys(student);
console.log(keys);

var values = Object.values(student);
console.log(values);


for(let prop in student){
    console.log(prop , " : ", student[prop])
}