(function () {
  const lluviaContainer = document.querySelector('.lluvia-container');

  // Evitar duplicación: limpiar gotas previas si existen
  while (lluviaContainer.firstChild) {
    lluviaContainer.removeChild(lluviaContainer.firstChild);
  }

  // Generar gotas nuevas
  for (let i = 0; i < 100; i++) {
    const gota = document.createElement('div');
    gota.classList.add('gota');
    gota.style.left = `${Math.random() * 100}vw`;
    gota.style.animationDelay = `${Math.random() * 2}s`;
    gota.style.opacity = Math.random();
    lluviaContainer.appendChild(gota);
  }
})();
// Fin de js/gota.js