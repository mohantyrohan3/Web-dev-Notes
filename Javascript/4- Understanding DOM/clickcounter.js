var clk = document.getElementById('div1');
var txt = document.getElementById('span');
var counter =0;

clk.addEventListener('click',function(){
    counter++;
    txt.innerText=counter;
});
