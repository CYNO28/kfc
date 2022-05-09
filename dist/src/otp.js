var mobile=localStorage.getItem("mobileNo");
var number=document.getElementById("number");
var display=document.createElement("h4");
display.innerText=mobile
number.append(display);

// timer>>>>
const startingminute=1.5;
let time=startingminute * 60;
const countdownEl=document.getElementById("countdown");

setInterval(updateTimer, 1000);

function updateTimer(){
    const minutes=Math.floor(time/60);
    let secound = time%60;

    secound=secound<10 ? '0' + secound : secound;

    countdownEl.innerHTML = `${minutes}: ${secound}`;
    time--;
}