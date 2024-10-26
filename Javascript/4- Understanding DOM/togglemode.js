var btn = document.getElementById('btn');
var inner_btn = document.getElementById('inner_btn');
var inn = document.getElementById('inner');

btn.addEventListener('click',function(){
    if(inn.style.backgroundColor=='white'){
        inn.style.backgroundColor='black';
        inn.style.color='white';
        btn.style.flexDirection='row-reverse';
        btn.style.backgroundColor='white';
    }
    else{
        inn.style.backgroundColor='white';
        inn.style.color='black';
        btn.style.flexDirection='row';
        // btn.style.backgroundColor='black'


    } 
})