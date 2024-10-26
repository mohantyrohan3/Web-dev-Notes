//https://dog.ceo/api/breeds/list/all
axios({
    method:'get',
    url:'https://dog.ceo/api/breeds/list/all'
})
.then((value)=>{
    let select1 = document.querySelector('#select-tag');
    let breeds_temp=value.data['message'];
    let breeds=Object.keys(breeds_temp);
    for(let i = 0;i<breeds.length;i++){
       let opt = document.createElement('option');
       opt.innerText = breeds[i];
       opt.setAttribute('value',breeds[i]);
       select1.appendChild(opt);
    }

})
.catch((error)=>{
    console.log(error);
})






function demo(arr){
    let img = document.querySelector('#images');
    for(let i=0;i<arr.length;i++){
        let img_tag = document.createElement('img');
        img_tag.setAttribute('src',arr[i]);
        img.appendChild(img_tag);
    }
}






function display_images(val){
    let Url = 'https://dog.ceo/api/breed/'+val+'/images/random/10';
    axios({
        method:'get',
        url:Url
    })
    .then((value)=>{
        let img_arr=value['data']['message'];
        demo(img_arr);
    })
    .catch((error)=>{
        alert('Error Occured');
    })
}





let btn = document.getElementById('button-press');

btn.addEventListener('click',function(event){
    let opt = document.querySelector('#select-tag');
    let val = opt.value;

    let img = document.querySelector('#images');
    if(img.children.length==0){
        display_images(val);
    }
    else{
        img.innerHTML='';
        display_images(val);
    }
    // console.log(img.children.length);
})


