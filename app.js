// var count = 0;
// var interval;
// function timer(){
//     count++
// console.log(count)
// }

// interval = setInterval(timer,1000)


// setTimeout(function(){
// clearInterval(interval)
// },5000)

// function timeout(){
//     console.log("running")
// }
// setTimeout(timeout,3000)
var hour = 0;
var min = 0;
var sec = 0;
var mili = 0;
var hourheading = document.getElementById("hour")
var minheading = document.getElementById("min")
var secheading = document.getElementById("sec")
var miliheading = document.getElementById("mili")

function timer(){
    mili++;
    miliheading.innerHTML = mili;
    if(mili >= 100){
        sec++;
        secheading.innerHTML = sec;
        mili = 0;
    }else if(sec >= 60){
    min++;
    sec = 0;
    minheading.innerHTML = min;
    }else if(min >= 60){
        hour++;
        min = 0;
        hourheading.innerHTML = hour;
    }
    document.getElementById("start").disabled = true;
}
function start(){
    interval = setInterval(timer,10)
    document.getElementById("start").disabled = false;
}
function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false;
}
function reset(){
    min = 0;
    sec = 0;
    mili = 0;
    hour = 0;
    hourheading.innerHTML = hour;
    minheading.innerHTML = min;
    secheading.innerHTML = sec ;
    miliheading.innerHTML = mili;
    stop()
    document.getElementById("start").disabled = false;
}
var setLaps = function() {
    var p = document.createElement("p") ;
    var timer = document.getElementById("min").innerText + " : " + document.getElementById("sec").innerText + " : " + document.getElementById("mili").innerText ;
    var ptext = document.createTextNode(timer);
    p.appendChild(ptext);
    var laps = document.getElementById("laps");
    laps.appendChild(p);
}