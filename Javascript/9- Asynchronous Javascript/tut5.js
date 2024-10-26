async function demo(){
    return 'Hello';
}

demo().then((data)=>{
    console.log(data);
})


let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello World');
    },2000);
})

let temp = await p1; // waits till p1 is resolved
