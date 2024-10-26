// console.log(window);

// Axios 

axios.get('https://dog.ceo/api/breeds/image/random123')
.then(response => {
    console.log(response['data']['message']);
})
.catch(function (error) {
    console.log('Error Occured');
})


// If parameters are required

// axios.get('link for the api',{
//     params: {
//         ID: 12345
//       }
// })


// Another way of making request

// axios({
//     method:'get',
//     url:'link of the api',
//     params:{

//     }
// })
