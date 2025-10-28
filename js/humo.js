document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 20; i++) {
    const humo = document.createElement("div");
    humo.className = "humo";
    humo.style.left = Math.random() * 100 + "%";
    humo.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(humo);
  }
});
