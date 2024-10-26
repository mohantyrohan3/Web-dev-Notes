var demo={
    name:'Rohan',
    greet:function(){
        console.log("Hello",this);
    }
}

// demo.greet();

// var localdemo = demo.greet; // This actually prints the this of window
// localdemo();

var localdemo = demo.greet.bind(demo);
localdemo();