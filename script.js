const container = document.querySelector(".container");
const card = document.querySelector(".card");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const description = document.querySelector("h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");
const circle = document.querySelector(".circle");

// Movimento 3D com rotação baseada no mouse
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animação de entrada
container.addEventListener("mouseenter", () => {
    card.style.transition = "none";
    title.style.transform = "translateZ(100px)";
    sneaker.style.transform = "translateZ(150px) rotateZ(-15deg)";
    description.style.transform = "translateZ(75px)";
    sizes.style.transform = "translateZ(50px)";
    purchase.style.transform = "translateZ(30px)";
    circle.style.transform = "translateZ(-50px)";
});

// Animação de saída
container.addEventListener("mouseleave", () => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    circle.style.transform = "translateZ(0px)";
});
