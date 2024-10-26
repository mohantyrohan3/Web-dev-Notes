function displayDate(){
    let now = new Date();
    let hour = document.getElementById('hour');
    let min = document.getElementById('minutes');
    let sec = document.getElementById('seconds');
    let date = document.getElementById('date');
    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
    date.innerText = now.toDateString();
}

var interval = setInterval(displayDate,1);