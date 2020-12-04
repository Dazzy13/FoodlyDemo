const hamburger = document.querySelector(".hamburger");
const optionlink = document.querySelector(".option-link");
const link = document.querySelectorAll(".option-link li");

hamburger.addEventListener("click", () => {
    optionlink.classList.toggle("open")
})