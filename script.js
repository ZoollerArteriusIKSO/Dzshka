function updateTime() {
    let hours = document.querySelector(".hours"); 
    let minutes = document.querySelector(".minutes"); 
    let seconds = document.querySelector(".seconds"); 
    const clock = new Date();
    hoursNumber = clock.getHours();
    minutesNumber = clock.getMinutes();
    secondsNumber = clock.getSeconds();
    hours.innerHTML = hoursNumber
    minutes.innerHTML = minutesNumber
    seconds.innerHTML = secondsNumber
    
}
setInterval(updateTime, 1000);