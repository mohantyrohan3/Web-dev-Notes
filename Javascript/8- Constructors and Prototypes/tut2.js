// 2nd rule or binding
// Explicit Binding

const john={
    name :'rohan',
};

function demo(){
    console.log(this , this.name);
}

// demo();

demo.call(john); // assigns the this of function to the object of john
demo.apply(john);// does the same thing
