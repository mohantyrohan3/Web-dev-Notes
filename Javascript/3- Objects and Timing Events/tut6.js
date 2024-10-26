let count = 10;


function timerCount(){
    if(count==0){
        console.log("Times Up");
        clearInterval(id);
        return;
    }
    console.log("Current Timer Left  : ",count,"seconds ");
    count--;
}


var id = setInterval(timerCount,1000);