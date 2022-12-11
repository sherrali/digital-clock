const clock = document.querySelector(".display");
setInterval (function(){
    let time = new Date();
let sec = time.getSeconds();
let min = time.getMinutes();
let hr = time.getHours();
let day = "AM"
if( hr > 12){
    hr = hr - 12;
    day = "pm";
}if(hr === 0 ){
    hr = 12;
}
if(min < 10){
    min = "0"+min;
}
if(sec < 10){
    sec = "0"+sec;
}
clock.textContent = `${hr}hr : ${min}min : ${sec}sec: ${day}`
})
