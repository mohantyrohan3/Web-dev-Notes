// Promise Api

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Hello 1');
    },1000);
});
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello 2');
    },2000);
});
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello 3');
    },3000);
});

// p1.then((data)=>{
//     console.log(data);
// })
// p2.then((data)=>{
//     console.log(data);
// })
// p3.then((data)=>{
//     console.log(data);
// })



// let promise_all = Promise.all([p1,p2,p3]); // Returns all at a time
// promise_all.then((value)=>{ // Fails if any of the promise has an error in it or rejected
//     console.log(value);
// });

let promise_all_settled = Promise.allSettled([p1,p2,p3]);
promise_all_settled.then((value)=>{ 
    console.log(value); // gives status along with the value
});

// Promise.race([]) // waits for the first promise to be settled(either accepted or rejected)
// Promise.any([]) // waits for the first promise to get accepted , not rejected