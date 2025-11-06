(function () {
  const hojaSrc = "img/hoja1.png"; // Ruta relativa limpia
  const cantidadHojas = 20;

  // Detectar si ya hay hojas activas
  if (document.querySelectorAll("img.hoja").length > 0) return;

  // Crear hojas
  for (let i = 0; i < cantidadHojas; i++) {
    const hoja = document.createElement("img");
    hoja.src = hojaSrc;
    hoja.className = "hoja";
    hoja.style.left = `${Math.random() * 100}vw`;
    hoja.style.animationDelay = `${Math.random() * 10}s`;
    hoja.style.animationDuration = `${8 + Math.random() * 6}s`;
    document.body.appendChild(hoja);
  }

  // Limpieza opcional al salir de la página
  window.addEventListener("beforeunload", () => {
    document.querySelectorAll("img.hoja").forEach(el => el.remove());
  });
})();
// Fin de js/hoja.js