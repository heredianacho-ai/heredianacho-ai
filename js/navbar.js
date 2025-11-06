fetch('../components/navbar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('navbar').innerHTML = html;

    // Resaltar la página activa
    const current = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  });
