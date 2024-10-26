// Function Expressions

var factorial = function fact(n){
    var ans =1;
    for(var i=1;i<=n;i++){
        ans*=i;
    }
    return ans;
};

// console.log(factorial(5));

var factorial2 = function (n){
    var ans =1;
    for(var i=1;i<=n;i++){
        ans*=i;
    }
    return ans;
};

console.log(factorial);
console.log(factorial2); 

// Function Expression does n't support hoisting meaning that if we write console.log(factorial) before declaration we get undefined