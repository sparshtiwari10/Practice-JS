const counter = document.getElementById("counter")
const decBtn = document.getElementById("dec-btn")
const resetBtn = document.getElementById("reset-btn")
const incBtn = document.getElementById("inc-btn")

let c = 0
counter.innerText = c
incBtn.addEventListener("click", function () {
    ++c
    counter.innerText = c
    color()
})
decBtn.addEventListener("click", function () {
    --c
    counter.innerText = c
    color()
})
resetBtn.addEventListener("click", function () {
    c = 0
    counter.innerText = 0
    color()
})
function color() {
    if (c < 0) {
        counter.style.color = "red"
    }
    else if (c > 0) {
        counter.style.color = "green"
    }
    else if(c===0)
    {
        counter.style.color="black"
    }
}