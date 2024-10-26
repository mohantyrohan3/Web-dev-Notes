var buttons = document.getElementsByClassName('button');
var value = document.getElementById('display-text');


var value1='';
var value2='';
var operator='';

for(var i=0 ; i<buttons.length;i++){
    buttons[i].addEventListener('click',function(event){
        var temp = event.target.innerText;

        if(temp == 'AC'){
            value.innerHTML="";
            value1='';
            value2='';
            operator='';
        }

        else if(temp=='+'){
            value.innerHTML="";
            operator+=temp;

            if(value2==''){
                value2=value1;
                value1=''; 
            }
            else{
                value1='';
            }
        }

        else if(temp=='-'){
            value.innerHTML="";
            operator+=temp;

            if(value2==''){
                value2=value1;
                value1=''; 
            }
            else{
                value1='';
            }
        }

        else if(temp=='*'){
            value.innerHTML="";
            operator+=temp;

            if(value2==''){
                value2=value1;
                value1=''; 
            }
            else{
                value1='';
            }
        }

        else if(temp=='/'){
            value.innerHTML="";
            operator+=temp;

            if(value2==''){
                value2=value1;
                value1=''; 
            }
            else{
                value1='';
            }
        }

        else if(temp=='%'){
            operator+=temp;
            var t1=parseFloat(value1);
            t1/=100;
            value1=t1.toString();
            value.innerText=t1;
            operator='';
            
        }

        else if(temp=='+/-'){
            if(value1==''){
                value.innerText='Error';
            }
            else{
                var t1=parseFloat(value1);
                t1=0-t1;
                value1=t1.toString();
                value.innerText=t1;
            }
        }


        else if(temp=='='){
            var t1=parseFloat(value1);
            var t2=parseFloat(value2);
            var t3;
            if(operator=='+'){
                t3 = t2+t1;
            }
            else if(operator=='-'){
                t3 = t2-t1;
            }
            else if(operator=='*'){
                t3 = t2*t1;
            }
            else if(operator=='/'){
                t3 = t2/t1;
            }

            value.innerText=t3;
            value2=t3.toString();
            operator='';
        }

        else{
            value.innerText+=temp;
            value1+=temp;
            
        }
        
    })
}