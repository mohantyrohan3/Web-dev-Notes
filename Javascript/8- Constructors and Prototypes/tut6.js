// Classes

function student(name,roll,marks){
    var student = {}; // Making empty object
    student.name=name;
    student.rollno =roll;
    student.marks = marks;
    return student;
}

var student1 = student('Rohan',45,90);

var student2 = student('Mohanty',123,56);


console.log(student1);
console.log(student2);