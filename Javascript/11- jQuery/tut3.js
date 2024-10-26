$('p').css({
    fontSize:'3rem',
    color:'red'
});

$('div').css({
    width:'100px',
    height:'100px',
    backgroundColor:'blue'
})

$('div').click(
    function(){
        var element = $(this);
        element.width(element.width()+10+'px');
        console.log('Div Pressed');
    }
)