// async and await

async function asyncTask(){
    return 'Resolved';
}

// asyncTask();
asyncTask().then((data)=>{
    console.log(data);
})