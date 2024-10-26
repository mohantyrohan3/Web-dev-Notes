// Constructor Concept
function student(name,roll,marks){
    this.name=name;
    this.rollno =roll;
    this.marks = marks;
}

var student1 = new student('Rohan',45,90);

var student2 = new student('Mohanty',123,56);


console.log(student1);
console.log(student2);