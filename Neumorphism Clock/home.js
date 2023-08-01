function clock() {
    var Hours = document.getElementById('Hours');
    var Minutes = document.getElementById('Minutes');
    var Seconds = document.getElementById('Seconds');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    Hours.innerHTML = h;
    Minutes.innerHTML = m;
    Seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);