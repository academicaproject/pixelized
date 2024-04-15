const swiperRightButton = document.getElementById("swipe");
const swiperLeftButton = document.getElementById("swiped");
const change = document.querySelector(".changeBox");

swiperRightButton.addEventListener("click", function () {
    change.removeAttribute("id", "freeGame");
    change.setAttribute("id", "freeGameSwiped");
})

swiperLeftButton.addEventListener("click", function () {
    change.removeAttribute("id", "freeGameSwiped");
    change.setAttribute("id", "freeGame");
})