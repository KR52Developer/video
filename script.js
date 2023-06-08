let switchBtn = document.querySelector(".switchBtn");
let video = document.querySelector(".videoContainer");


switchBtn.addEventListener("click", function () {
    console.log("clicked");

    let classListBtn = switchBtn.classList;

    if (!classListBtn.contains("slideRightLeft")) {
        switchBtn.classList.add("slideRightLeft");
        video.pause();
    } else {
        switchBtn.classList.remove("slideRightLeft");
        video.play();
    }
});



let preloader = document.querySelector(".preloader");

window.addEventListener("DOMContentLoaded", function () {
    preloader.classList.add("hide-preloader");
})