const oylmpic = document.querySelector('#root')
function updated(){
const FifaDate = new Date("Jun 11, 2026 00:00:00")
const currentdate = new Date()
const totalMilisecond = FifaDate-currentdate
// oylmpic.innerHTML = '' + totalMilisecond

if(totalMilisecond > 0){
    const totalSeconds = Math.floor(totalMilisecond / 1000);
                const days = Math.floor(totalSeconds / (3600 * 24));
                const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = Math.floor(totalSeconds % 60);
                oylmpic.innerHTML =`Days : ${days} hour : ${hours}  Minutes : ${minutes}  Seconds : ${seconds}`
}
else{
     oylmpic.innerHTML = "Jun 11, 2026 00:00:00"
}


}
setInterval(updated,1000)