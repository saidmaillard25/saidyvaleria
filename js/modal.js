var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    var timeleft = 10;

    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            countdown.innerHTML = "";
            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
        } else {
            countdown.innerHTML = timeleft + " segundos restantes";
        }
        timeleft -=1 ;
    },1000);
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById("myModal2");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    var timeleft = 10;

    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            countdown.innerHTML = "";
            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
        } else {
            countdown.innerHTML = timeleft + " segundos restantes";
        }
        timeleft -=1 ;
    },1000);
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}