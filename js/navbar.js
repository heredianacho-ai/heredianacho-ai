document.addEventListener("DOMContentLoaded", () => {
  const repo = "heredianacho-ai"; // Cambiá esto si tu repositorio tiene otro nombre
  const isGitHub = window.location.hostname.includes("github.io");
  const base = isGitHub ? `/${repo}/` : "/";

  // Cargar el navbar
  fetch(`${base}components/navbar.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Reescribir rutas internas del navbar
      document.querySelectorAll("#navbar a").forEach(link => {
        const href = link.getAttribute("href");

        // Ignorar externos y anclas
        if (!href || href.startsWith("http") || href.startsWith("#")) return;

        // Corregir ruta al index
        if (href === "index.html") {
          link.setAttribute("href", `${base}index.html`);
        }

        // Corregir rutas internas (pages/, css/, js/, etc.)
        else if (!href.startsWith("/")) {
          link.setAttribute("href", `${base}${href}`);
        }
      });
    })
    .catch(err => console.error("Error cargando navbar:", err));

  // Reescribir rutas globales (fuera del navbar)
  document.querySelectorAll("a[href], link[href], script[src], img[src]").forEach(el => {
    const attr = el.hasAttribute("href") ? "href" : "src";
    const value = el.getAttribute(attr);

    // Ignorar externos, anclas y rutas absolutas ya corregidas
    if (!value || value.startsWith("http") || value.startsWith("#") || value.startsWith("/")) return;

    el.setAttribute(attr, `${base}${value}`);
  });
});
