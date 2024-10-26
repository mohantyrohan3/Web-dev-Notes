// Fetching Http request and data

function fetchRandomDogImage(){

    // var xhrRequest = new XMLHttpRequest();
    // xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true); // true for asynchronous 
    // xhrRequest.send()
    // xhrRequest.onload = function(){
    //     console.log(xhrRequest.response);
    //     var jsonresponse=JSON.parse(xhrRequest.response);
    //     var imageurl = jsonresponse['message'];
    //     $('#image').attr('src',imageurl);
    // }

    // xhrRequest.onerror = function(){
    //     console.log('Request Failed');
    // }


    // Using ajax jquery

    // $.ajax({
    //     url:'https://dog.ceo/api/breeds/image/random',
    //     method:'GET',
            // data={
            //     for query paramters or authetication parameters
            // }
    //     success: function(data){
    //         console.log(data)
    //         var imageurl = data['message'];
    //         $('#image').attr('src',imageurl);
    //     }
    // });


    $.get('https://dog.ceo/api/breeds/image/random' , function(data){
            console.log(data)
            var imageurl = data['message'];
            $('#image').attr('src',imageurl);
    }).fail(function(xhr,textstatus,errothrown){
        console.log('Error Thrown');
    })
    
    
}



$('#button').click(fetchRandomDogImage)