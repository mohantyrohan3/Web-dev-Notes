// For using Strict Mode        "use strict";



var outerdiv  = document.getElementById('div1');

outerdiv.addEventListener('mouseover',function abc(){
    console.log("Mouse Over");
});

outerdiv.addEventListener('mouseout',function(){
    console.log('Mouse Out ');
});


var search = document.getElementById('search');

search.addEventListener('keypress',function(){
    console.log('Key Pressed ');
});


document.addEventListener('keydown',function(event){
    console.log('Key Down ',event.key);
});