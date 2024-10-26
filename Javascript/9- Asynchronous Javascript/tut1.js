// var promise = new Promise(()=> {});

var promise = new Promise((resolve,reject)=> {
    // resolve();
    // reject();

    setTimeout(
        ()=>{
            resolve(
                {
                    message:"Promise Fulfilled"
                }
            )
        },
        2000
    );
});

// console.log(promise);

promise
.then((data)=> {
    console.log(data);
})
.catch((error)=> {
    console.log(error);
})

// chaining of promises
// promise.then().then().then().catch()