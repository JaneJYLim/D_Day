const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h2");

function getTime() {
    
    //지정된날짜
    let endDate = new Date(2020, 11, 25);
    let endDay = endDate.getDay();
    let endHours = endDate.getHours();
    let endMinutes = endDate.getMinutes();
    let endSeconds = endDate.getSeconds();
    
    //현재날짜
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    //지정된날짜와 현재날짜의 gap차이
    const gap = endDate - date;

    let gapDay = Math.floor(gap / (1000 * 60 * 60 * 24));
    let gapHours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    let gapMinutes = Math.floor((gap / (1000 * 60)) % 60);
    let gapSeconds = Math.floor((gap / 1000) % 60);
        
    clockTitle.innerHTML = `${gapDay}d ${gapHours}h ${gapMinutes}m ${gapSeconds}s`;
    
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();