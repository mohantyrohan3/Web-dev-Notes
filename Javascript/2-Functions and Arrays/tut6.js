// Arrays 

var arr = [1,2,3];

var arr2 = new Array(4,5,6);

console.log(arr);
console.log(arr2);

console.log(arr[1]);
console.log(arr2[5]); // Undefined

arr[1]=100;
arr2[5]=200;

console.log(arr);
console.log(arr2);

console.log(arr2.length);

// var arr = new Array(2) This actually creates an array of length 2