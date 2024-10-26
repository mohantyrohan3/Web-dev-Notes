// Hoisting

hoistDemo();


function hoistDemo(){
    console.log(i);
    var i=10;
}

hoistDemo();