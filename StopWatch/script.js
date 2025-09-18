const timerdisplay = document.querySelector('#timerdisplay')
const startbtn = document.getElementById('start-btn')
const stopbtn = document.getElementById('stop-btn')
const resetbtn = document.getElementById('reset-btn')

let hour = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let timerId = null;

function formatym(time){
    return time < 10 ? `0${time}` : time
}
startbtn.addEventListener('click',()=>{
    if(timerId !== null){
        return 
    }
    timerId = setInterval(()=>{
        miliseconds++;
        if(miliseconds == 100){
            miliseconds = 0;
            seconds++
    } if(seconds == 60){
        seconds = 0
        minutes++;
    }if(minutes == 60){
        minutes = 0;
        hour++
    }
        let formatedhour = formatym(hour)
        let formatedmin = formatym(minutes)
        let formatedsec = formatym(seconds)
        let formatedmili = formatym(miliseconds)



    timerdisplay.textContent = `${formatedhour} : ${formatedmin} : ${formatedsec} : ${formatedmili}`
    },10)
})
stopbtn.addEventListener('click',()=>{
    clearInterval(timerId);
    timerId=null
})
resetbtn.addEventListener('click',()=>{
    clearInterval(timerId);
    timerId = null;
    hour =0;
    minutes=0;
    seconds =0;
    miliseconds=0;
    timerdisplay.textContent =`00 : 00 : 00 : 00`;
})
