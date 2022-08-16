const startbutton = document.querySelector('#start');
const stopbutton = document.querySelector('#stop');
const resetbutton = document.querySelector('#reset');

const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

stopbutton.style.display = 'none';

let intervalid;
let timmerTime = 0;
function startTimmer() {
    intervalid = setInterval(incrementTimmer, 1000);
    startbutton.style.display = 'none';
    stopbutton.style.display = 'inline-block';
}
function stopTimmer() {
    clearInterval(intervalid);
    startbutton.style.display = 'inline-block';
    stopbutton.style.display = 'none';
}
function resetTimmer() {
    stopTimmer();
    timmerTime = 0;
    secs.innerText = '00';
    mins.innerText = '00';

}
function incrementTimmer() {
    timmerTime++;
    const numberOfMins = Math.floor(timmerTime / 60);
    const numberOfSecs = timmerTime % 60;

    secs.innerText = zeroPadding(numberOfSecs);
    mins.innerText = zeroPadding(numberOfMins);
}

function zeroPadding(number) {
    return number < 10 ? `0${number}` : `${number}`;

}

startbutton.addEventListener('click', startTimmer);
stopbutton.addEventListener('click', stopTimmer);
resetbutton.addEventListener('click', resetTimmer);
