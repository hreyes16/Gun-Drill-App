const timer_element = document.querySelector('.timer');
const startBtn = document.getElementById("start-time");
const stopBtn = document.getElementById("stop-time");
const restartBtn = document.getElementById('restart-time');

let seconds = 0;
let interval = null;

startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime);
restartBtn.addEventListener('click', resetTime);

    function timer(){
    seconds++;

    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds - (hrs * 3600)) /60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;
    
    timer_element.innerText = `${hrs}:${mins}:${secs}`;
}

function startTime(){
    if(interval){
        return
    }
    interval = setInterval(timer, 1000);
}

function resetTime(){
stopTime();
seconds = 0;
timer_element.innerText = '00:00:00';
}
function stopTime(){
    clearInterval(interval);
    interval = null;
}

