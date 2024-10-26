// Objects in Javascript

var student ={
    name:"abc",
    rollno:120,
    marks:20
};
// var student = new Object(); Another way of creating objects

// console.log(typeof(student)); // Object
console.log(student);
console.log(student.marks); // For accessing particular key in the objects

student.marks=80; // For changing the value 
// student['marks']; 
console.log(student);


console.log(student.sem); // will not throw error

student.sem=4;
console.log(student);


// For Deleting property of an object 
delete student['marks'];
console.log(student);