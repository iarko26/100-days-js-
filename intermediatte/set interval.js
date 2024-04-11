//using setInterval function and the countdown timer will start from 1 minute(60 second) and update every second and stop it when it reaches 0 second and then it will notify and pop up message that timer is up

let timer=document.querySelector('.timer');
let countdown=60;
function updatecountdown(){
    countdown--;
    let minutes=Math.floor(countdown/60);
    let seconds=countdown%60;
    timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
   

}
let countdownTimer=setInterval(()=>{
    updatecountdown();
    if(countdown<=0){
        clearInterval(countdownTimer);
        alert('Time is up');
    }
},1000);


