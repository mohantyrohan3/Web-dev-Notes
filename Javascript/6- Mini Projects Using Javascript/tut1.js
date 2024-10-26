var a=10;

if(a<=10){
    let b = 20;
}

else{
    var c = 30;
}

console.log(a,b,c); // Giving Error as let variable is only available inside scope of if conditions
// Let and const keywords make variable hoisting but cannot use until it's defined 