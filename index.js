const sec_html = document.getElementById('second');
const msec_html = document.getElementById('tens');
const start_btn = document.getElementById('btn-start')
const stop_btn = document.getElementById('btn-stop')
const reset_btn = document.getElementById('btn-reset')
let interval;
let sec = 0;
let msec = 0;

start_btn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
})

stop_btn.addEventListener('click', () => {
    clearInterval(interval);
})

reset_btn.addEventListener('click', () => {
    clearInterval(interval);
    sec_html.innerHTML = "00"
    msec_html.innerHTML = '00'
    msec = 0;
    sec = 0;
})

function startTimer(){
    msec += 1;

    if(msec<10){
        msec_html.innerHTML = '0' + msec;
    }else if(msec<100){
        msec_html.innerHTML = msec;
    }else if(msec >= 100){
        msec = 0;
        sec += 1
        msec_html.innerHTML = '0' + msec;
    }
    if(sec < 10){
        sec_html.innerHTML = '0' + sec;
    }else if(sec < 100){
        sec_html.innerHTML = sec;
    }
}