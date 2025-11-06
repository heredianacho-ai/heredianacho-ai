(function () {
  const cantidadHumo = 20;

  // Evitar duplicación: limpiar humo previo si existe
  document.querySelectorAll("div.humo").forEach(el => el.remove());

  // Generar nuevas partículas de humo
  for (let i = 0; i < cantidadHumo; i++) {
    const humo = document.createElement("div");
    humo.className = "humo";
    humo.style.left = `${Math.random() * 100}vw`;
    humo.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(humo);
  }

  // Limpieza opcional al salir de la página
  window.addEventListener("beforeunload", () => {
    document.querySelectorAll("div.humo").forEach(el => el.remove());
  });
})();
// Fin de js/humo.js