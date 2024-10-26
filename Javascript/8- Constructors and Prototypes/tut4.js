// Implicit Bindind

var demo = {
    name:'rohan',
    greet:function(){
        console.log('Hey',this);
    }
}

demo.greet();

var local = demo['greet']; // Implicit Binding
local();