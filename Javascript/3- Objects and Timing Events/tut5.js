var seconds =1;

function sayHello(){
    console.log("Hello "+"After ",seconds,"sec");
    seconds ++;
    if(seconds==6){
        clearInterval(id);
    }
    
}

var id = setInterval(sayHello,1000);