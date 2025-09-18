const timerdisplay = document.querySelector('#timerdisplay')
const startbtn = document.getElementById('start-btn')
const stopbtn = document.getElementById('stop-btn')
const resetbtn = document.getElementById('reset-btn')

let hour = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let timerId = null;
function Displayupdated(time){
    return  time < 10 ? `0${time}`:time
}

startbtn.addEventListener('click',()=>{

    timerId = setInterval(()=>{
 if(timerId !== null){
        miliseconds++;
        if(miliseconds == 100){
            miliseconds = 0;
            seconds++
         }if(seconds == 60){
            seconds = 0;
            minutes++;
         }if(minutes == 60){
            minutes = 0;
            hour++;
         }
     }
        let  updatehour = Displayupdated(hour)
        let  updatemin = Displayupdated(minutes)
        let  updatesec = Displayupdated(seconds)
        let  updatemili = Displayupdated(miliseconds)

     timerdisplay.textContent = `${updatehour} : ${updatemin} : ${updatesec} : ${updatemili}`
   },10)
})
stopbtn.addEventListener('click',()=>{
    clearInterval(timerId);
    timerId = 0;
})
resetbtn.addEventListener('click',()=>{
    clearInterval(timerId)
    timerId = 0;
    hour=0
    minutes =0;
    seconds = 0;
    miliseconds =0;
    timerdisplay.textContent = `00 : 00 : 00 : 00`
})