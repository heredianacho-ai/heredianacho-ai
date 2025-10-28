// Ruleta de colores Magic: The Gathering
const colorCombos = [
    { nombre: 'Blanco', colores: ['Blanco'], color: '#fffbe7', texto: '#222' },
    { nombre: 'Azul', colores: ['Azul'], color: '#e0f0ff', texto: '#1976d2' },
    { nombre: 'Negro', colores: ['Negro'], color: '#edeaf0', texto: '#222' },
    { nombre: 'Rojo', colores: ['Rojo'], color: '#ffe7e7', texto: '#d32f2f' },
    { nombre: 'Verde', colores: ['Verde'], color: '#e7ffe7', texto: '#388e3c' },
    { nombre: 'Azorius', colores: ['Blanco', 'Azul'], color: '#b3c6e7', texto: '#222' },
    { nombre: 'Dimir', colores: ['Azul', 'Negro'], color: '#a3b6c6', texto: '#222' },
    { nombre: 'Rakdos', colores: ['Negro', 'Rojo'], color: '#e7b3b3', texto: '#222' },
    { nombre: 'Gruul', colores: ['Rojo', 'Verde'], color: '#c6e7b3', texto: '#222' },
    { nombre: 'Selesnya', colores: ['Verde', 'Blanco'], color: '#e7e7b3', texto: '#222' },
    { nombre: 'Orzhov', colores: ['Blanco', 'Negro'], color: '#e7e7e7', texto: '#222' },
    { nombre: 'Izzet', colores: ['Azul', 'Rojo'], color: '#b3d1e7', texto: '#222' },
    { nombre: 'Golgari', colores: ['Negro', 'Verde'], color: '#b3e7b3', texto: '#222' },
    { nombre: 'Boros', colores: ['Rojo', 'Blanco'], color: '#f7e7b3', texto: '#222' },
    { nombre: 'Simic', colores: ['Verde', 'Azul'], color: '#b3e7e7', texto: '#222' },
    { nombre: 'Esper', colores: ['Blanco', 'Azul', 'Negro'], color: '#c6d6e7', texto: '#222' },
    { nombre: 'Grixis', colores: ['Azul', 'Negro', 'Rojo'], color: '#b3b3e7', texto: '#222' },
    { nombre: 'Jund', colores: ['Negro', 'Rojo', 'Verde'], color: '#d6b3e7', texto: '#222' },
    { nombre: 'Naya', colores: ['Rojo', 'Verde', 'Blanco'], color: '#e7d6b3', texto: '#222' },
    { nombre: 'Bant', colores: ['Verde', 'Blanco', 'Azul'], color: '#b3e7d6', texto: '#222' },
    { nombre: 'Abzan', colores: ['Blanco', 'Negro', 'Verde'], color: '#d6e7b3', texto: '#222' },
    { nombre: 'Jeskai', colores: ['Azul', 'Rojo', 'Blanco'], color: '#e7c6b3', texto: '#222' },
    { nombre: 'Sultai', colores: ['Negro', 'Verde', 'Azul'], color: '#b3d6c6', texto: '#222' },
    { nombre: 'Mardu', colores: ['Rojo', 'Blanco', 'Negro'], color: '#e7b3c6', texto: '#222' },
    { nombre: 'Temur', colores: ['Verde', 'Azul', 'Rojo'], color: '#b3e7c6', texto: '#222' },
    { nombre: 'Glint', colores: ['Azul', 'Negro', 'Rojo', 'Verde'], color: '#b3e7e7', texto: '#222' },
    { nombre: 'Dune', colores: ['Blanco', 'Negro', 'Rojo', 'Verde'], color: '#e7d6b3', texto: '#222' },
    { nombre: 'Ink', colores: ['Blanco', 'Azul', 'Rojo', 'Verde'], color: '#b3c6e7', texto: '#222' },
    { nombre: 'Witch', colores: ['Blanco', 'Azul', 'Negro', 'Verde'], color: '#c6e7b3', texto: '#222' },
    { nombre: 'Yore', colores: ['Blanco', 'Azul', 'Negro', 'Rojo'], color: '#e7b3d6', texto: '#222' },
    { nombre: 'Cinco Colores', colores: ['Blanco', 'Azul', 'Negro', 'Rojo', 'Verde'], color: '#e7e7e7', texto: '#b48a2c' },
];
const num = colorCombos.length;
const canvas = document.getElementById('ruleta');
const ctx = canvas.getContext('2d');
const center = 240;
const radius = 240;
const angulo = 2 * Math.PI / num;
let giro = 0;
let girando = false;

function dibujarRuleta(rot = 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < num; i++) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, i * angulo + rot, (i + 1) * angulo + rot);
        ctx.closePath();
        ctx.fillStyle = colorCombos[i].color;
        ctx.fill();
        ctx.restore();
        // Texto
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate((i + 0.5) * angulo + rot);
        ctx.textAlign = 'center';
        ctx.font = 'bold 1.15em Oswald, Arial, sans-serif';
        ctx.fillStyle = colorCombos[i].texto;
        ctx.fillText(colorCombos[i].nombre, 145, 10);
        ctx.restore();
    }
}
dibujarRuleta();

document.getElementById('girarBtn').onclick = function () {
    if (girando) return;
    girando = true;
    let vueltas = Math.floor(Math.random() * 4) + 8;
    let destino = Math.random() * 2 * Math.PI;
    let total = vueltas * 2 * Math.PI + destino;
    let t = 0;
    let dur = 5200;
    let inicio = giro;
    function animar() {
        t += 16;
        let prog = Math.min(t / dur, 1);
        let eased = 1 - Math.pow(1 - prog, 3);
        giro = inicio + (total - inicio) * eased;
        dibujarRuleta(giro);
        if (prog < 1) {
            requestAnimationFrame(animar);
        } else {
            girando = false;
            let angSector = ((-Math.PI / 2 - giro) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
            let idxFinal = Math.floor(angSector / angulo) % num;
            mostrarResultado(idxFinal);
        }
    }
    requestAnimationFrame(animar);
};
function mostrarResultado(idx) {
    const combo = colorCombos[idx];
    let colores = combo.colores.join(', ');
    document.getElementById('resultadoRuleta').innerHTML = `<span style="font-size:1.25em;color:#1976d2;"><b>${combo.nombre}</b></span><br><span style=\"font-size:1em;color:#444;\">(${colores})</span>`;
}
