// Some rules of this pointer in js

function demo(){
    console.log(this);
}

function demo1(name){
    this.name = name;
    console.log(this);
}

// demo(); // This actually calls to the window since demo is called in global scope
new demo(); // This actually makes an object of demo type

new demo1('Rohan');
