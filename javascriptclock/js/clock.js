
let user = prompt("isminizi giriniz:");
let hello = document.querySelector('#myName');

var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

function hours(){
    let clock = document.querySelector('#myClock');

    let time = new Date();
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let day = days[time.getDay()];

    clock.innerHTML = hour+"."+min+"."+sec+" "+day;
}

setInterval(hours, 1000);

hello.innerHTML = user.toUpperCase();

