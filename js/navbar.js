document.addEventListener("DOMContentLoaded", () => {
  const isGitHub = window.location.hostname.includes("github.io");
  const repoName = "heredianacho-ai";
  const basePath = isGitHub ? `/${repoName}/` : "/";

  fetch(`${basePath}components/navbar.html`)
    .then(res => {
      if (!res.ok) throw new Error(`Error al cargar navbar: ${res.status}`);
      return res.text();
    })
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => console.error("Error cargando navbar:", err));
});
