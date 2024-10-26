// Example of Callbacks

function demo1(name,callback){
    console.log("Hi "+name);
    callback();
}

function demo2(){
    console.log('How are you my friend');
}

demo1('Rohan',demo2);