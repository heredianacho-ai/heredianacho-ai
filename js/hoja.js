document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 20; i++) {
    const hoja = document.createElement("img");
    hoja.src = "../img/hoja1.png";
    hoja.className = "hoja";
    hoja.style.left = Math.random() * 100 + "%";
    hoja.style.animationDelay = Math.random() * 10 + "s";
    hoja.style.animationDuration = (8 + Math.random() * 6) + "s";

    document.body.appendChild(hoja);
  }
});
