let hrs=document.querySelector(".hrs")
let min=document.querySelector(".min")
let sec=document.querySelector(".sec")
setInterval(setTime,1000)

function setTime(){
    let newDate=new Date()
    let hour=newDate.getHours()
    let mint=newDate.getMinutes()
    let ses=newDate.getSeconds()

let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
hrs.style.transform=`translate(50%)rotate(${hour*30+mint/2}deg)`;
min.style.transform=`translate(50%)rotate(${mint*6}deg)`;
sec.style.transform=`translate(50%)rotate(${ses*6}deg)`;
}
setTime()
setInterval(setTime,1000)