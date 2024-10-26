// Splice Function
var arr = [1,2,3,4,5];

arr.splice(1,1);

console.log(arr);


arr.splice(1,0,2);
console.log(arr);

arr.splice(5,0,[6,7,8]);
console.log(arr);