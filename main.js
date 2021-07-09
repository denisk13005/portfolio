const circle = document.querySelector(".circle");
window.addEventListener("mousemove", (e) => {
    circle.style.top = e.pageY + "px";
    circle.style.left = e.pageX + "px";
})