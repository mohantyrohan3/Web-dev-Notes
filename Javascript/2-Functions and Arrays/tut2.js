function sum(a,b){
    console.log(a,b);
    return a+b;
}

var ans1 = sum(4); // Simply takes the other value as undefined 
console.log(ans1);

var ans2 = sum(4,5,7,9);   // Simply ignores the other arguments 
console.log(ans2);