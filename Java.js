var start = new Date().getTime();
        
function delay() {
    setTimeout(display, Math.random() * 2000);
    
}

function display(){
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.top = (Math.random() * 700) + "px";
    document.getElementById("shape").style.left = (Math.random() * 1300) + "px";
    start = new Date().getTime();
}

delay();
document.getElementById("shape").onclick = function() {
    var end = new Date().getTime();
    var timediff = (end - start)/1000;
    document.getElementById("time").innerHTML = timediff + "s";
    document.getElementById("shape").style.display = "none";
    delay();
}