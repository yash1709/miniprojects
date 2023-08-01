function heart() {
    var x = document.querySelector(".fa");
    x.classList.add("heart");
    setTimeout(function () {
        x.classList.remove("heart");
    }, 1000)
}