// var para = document.getElementById('para1');
// para.innerText='Welcome';

// Using jquery
$('#para1').html('Welcome');
$('#para2').text('Welcome 2');
// $('#para1').hide();

// $().attr()
// .width()
// .height()
// .position()
// .val  {gets the value of form elements}


var para = $('p');
var p1 = para.eq(0); // This will give jquery object
console.log(p1);


var p2 = para[0]; // This will give the html element
console.log(p2);