let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStartStop = document.querySelector('.btn-start-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let lapsList = document.getElementById('laps');
let interval;

let lapCounter = 1;

btnStartStop.addEventListener('click', () => {
    if (btnStartStop.textContent === 'Start' || btnStartStop.textContent === 'Resume') {
        // Start or Resume the timer
        interval = setInterval(startTimer, 10);
        btnStartStop.textContent = 'Stop';
    } else {
        // Stop the timer
        clearInterval(interval);
        btnStartStop.textContent = 'Resume';
    }
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    mins = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
    getMins.innerHTML = '00';
    btnStartStop.textContent = 'Start';
    lapsList.innerHTML = ''; // Reset laps lst
    lapCounter = 1; // Reset lap countr
});

btnLap.addEventListener('click', () => {
    let lapTime = `${padTime(mins)}:${padTime(seconds)}:${padTime(tens)}`;
    let lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
    lapsList.appendChild(lapItem);
});

function padTime(time) {
    return time < 10 ? `0${time}` : time;
}

function startTimer() {
    tens++;
    if (tens > 99) {
        seconds++;
        tens = 0;
    }
    if (seconds > 59) {
        mins++;
        seconds = 0;
    }
    getTens.innerHTML = (tens < 10 ? '0' : '') + tens;
    getSeconds.innerHTML = (seconds < 10 ? '0' : '') + seconds;
    getMins.innerHTML = (mins < 10 ? '0' : '') + mins;
}
