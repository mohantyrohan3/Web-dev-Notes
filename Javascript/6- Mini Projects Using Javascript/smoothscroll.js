let but = document.getElementsByClassName('button');

for(let i=0; i<but.length;i++){
    but[i].addEventListener('click',function(event){
        event.preventDefault();
        let att = event.target.attributes;
        let id = att['href'].value;
        let sec = document.querySelector(id);
        let cord = sec.getBoundingClientRect();
        let target = cord['y'];
        let curr = 0;
        var interval = setInterval(function(){
            if(curr>=target){
                clearInterval(interval);
            }
            else{
                curr+=60;
                window.scrollBy(0,60);
            }
        },30);
    })
}