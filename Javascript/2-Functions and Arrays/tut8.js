// Iterating over the array 

var arr = [1,2,3,4,5];

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Another way of Iterating over the array
function print(element){
    console.log(element);
}


arr.forEach(print);