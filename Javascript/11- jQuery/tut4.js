var count=0;

function addDetails(roll,name,marks){
    count++;
    let det1 = document.querySelector('#details');
    let div = document.createElement('div');
    let str1 = document.createTextNode(count+' .'+"Roll No - " + roll + " , " +name + " has scored "+marks+' marks');
    // div.appendChild(str1);
    div.innerText = count+' .'+"Roll No - " + roll + " , " +name + " has scored "+marks+' marks'
    div.setAttribute('id','text1');
    det1.appendChild(div);
    
    // let det = $('#details');
    // let str = count+' .'+"Roll No - " + roll + " , " +name + " has scored "+marks+' marks';
    // det.wrapInner("<div>"+str+"</div>")

    $('#roll').val("");
    $('#name').val("");
    $('#marks').val("");

}


$('#button').click(function(event){
    //alert('Your Details are Submitted');
    event.preventDefault();
    var roll = $('#roll').val();
    var name = $('#name').val();
    var marks = $('#marks').val();

    // console.log(roll, " ",name," ",marks);

    if(roll =='' &&  marks ==''){
        alert('Please enter all the details');
    }
    else if(name == ''){
        alert('Please enter all the details');
    }
    else{
        addDetails(roll,name,marks);
    }
})