let sec=document.querySelector(".sec");
let min=document.querySelector(".min");
let hours=document.querySelector(".hours");
let digital=document.querySelector(".digital");
let audioDOM=document.querySelector(".audio");

function timer(){
    let second=new Date().getSeconds();
    let minute=new Date().getMinutes();
    let hour=new Date().getHours();
    
    sec.style.transform=`rotate(${(second*6)}deg)`
    min.style.transform=`rotate(${(minute*6)}deg)`
    hours.style.transform=`rotate(${(hour*30+minute/2)}deg)`
    audioDOM.play();

    digital.innerHTML=`${hour<10?"0"+hour:hour}:${minute<10?"0"+minute:minute}:${second<10?"0"+second:second}`
}
setInterval(timer,1000);