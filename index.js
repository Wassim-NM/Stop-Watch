
const msec_html = document.getElementById('tens')
const sec_html = document.getElementById('second');
const min_html = document.getElementById('minutes');
const hour_html = document.getElementById('hour')
const day_html = document.getElementById('day')
const year_html = document.getElementById('year')
const curent_year_html = document.getElementById('curent_year')
const start_btn = document.getElementById('btn-start')
const stop_btn = document.getElementById('btn-stop')
const reset_btn = document.getElementById('btn-reset')

let interval;
let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let day = 0;
let year = 0;
let curent_year = 2024;


start_btn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 1)
})

stop_btn.addEventListener('click', () => {
    clearInterval(interval);
})

reset_btn.addEventListener('click', () => {
    clearInterval(interval);
    msec_html.innerHTML = '00';
    sec_html.innerHTML = '00';
    min_html.innerHTML = '00';
    hour_html.innerHTML = '00';
    day_html.innerHTML = '00';
    year_html.innerHTML = '00';
    curent_year_html.innerHTML = '2024';
    msec = 0;
    sec = 0;
    min = 0;
    hr = 0;
    day = 0;
    year = 0;
    curent_year = 2024;
})

 
function startTimer(){
    msec += 1;

    if(msec<10){
        msec_html.innerHTML = '0' + msec;
    }else if(msec<100){
        msec_html.innerHTML = msec;
    }else if(msec >= 100){
        msec_html.innerHTML = '00';
        msec = 0;
        sec += 1;
    }
    if(sec < 10){
        sec_html.innerHTML = '0' + sec;
    }else if(sec < 60){
        sec_html.innerHTML = sec;
    }else if(sec >= 60){
        sec_html.innerHTML = '00';
        sec = 0;
        min += 1;
    }
    if(min < 10){
        min_html.innerHTML = '0' + min;
    }else if(min < 60){
        min_html.innerHTML = min;
    }else if(min >= 60){
        min_html.innerHTML = '00';
        min = 0;
        hr += 1;
    }
    if(hr < 10){
        hour_html.innerHTML = '0' + hr;
    }else if(hr < 24){
        hour_html.innerHTML = hr;
    }else if(hr >= 24){
        hour_html.innerHTML = '00';
        hr = 0;
        day += 1;
    }
    if(day < 10){
        day_html.innerHTML = '0' + day;
    }else if(day < 365){
        day_html.innerHTML = day;
    }else if(day >= 365){
        if(curent_year % 4 != '0'){
            day_html.innerHTML = '00';
            day = 0;
            year += 1;
            curent_year +=1;
            curent_year_html.innerHTML = curent_year;
        }else if(curent_year % 4 == '0'){
            if(day < 366){
                day_html.innerHTML = day;
            }else if(day = 366){
                day_html.innerHTML = '00';
                day = 0;
                year += 1;
                curent_year +=1;
                curent_year_html.innerHTML = curent_year;
            }
        }
    }
    if(year < 10){
        year_html.innerHTML = '0' + year;
    }else if(year < 1000){
        year_html.innerHTML = year;
    }else if(year >= 1000){
        clearInterval(interval);
    }
}

