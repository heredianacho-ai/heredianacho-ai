// Colores 
const COLORS = [
    { name: 'Blanco', emoji: '⚪' },
    { name: 'Azul', emoji: '🔵' },
    { name: 'Negro', emoji: '⚫' },
    { name: 'Rojo', emoji: '🔴' },
    { name: 'Verde', emoji: '🟢' }
];

// Combinaciones    
const COLOR_COMBINATIONS = {
    // Guilds (2 colores)
    'Blanco,Azul': 'Azorius',
    'Azul,Negro': 'Dimir',
    'Negro,Rojo': 'Rakdos',
    'Rojo,Verde': 'Gruul',
    'Verde,Blanco': 'Selesnya',
    'Blanco,Negro': 'Orzhov',
    'Azul,Rojo': 'Izzet',
    'Negro,Verde': 'Golgari',
    'Rojo,Blanco': 'Boros',
    'Verde,Azul': 'Simic',

    // Shards (3 colores aliados)
    'Blanco,Azul,Negro': 'Esper',
    'Azul,Negro,Rojo': 'Grixis',
    'Negro,Rojo,Verde': 'Jund',
    'Rojo,Verde,Blanco': 'Naya',
    'Verde,Blanco,Azul': 'Bant',

    // Wedges (3 colores enemigos)
    'Blanco,Negro,Verde': 'Abzan',
    'Azul,Rojo,Blanco': 'Jeskai',
    'Negro,Verde,Azul': 'Sultai',
    'Rojo,Blanco,Negro': 'Mardu',
    'Verde,Azul,Rojo': 'Temur',

    // 4 colores (Nephilim, sin color)
    'Azul,Negro,Rojo,Verde': 'Glint',
    'Blanco,Negro,Rojo,Verde': 'Dune',
    'Blanco,Azul,Rojo,Verde': 'Ink',
    'Blanco,Azul,Negro,Verde': 'Witch',
    'Blanco,Azul,Negro,Rojo': 'Yore',

    // 5 colores
    'Blanco,Azul,Negro,Rojo,Verde': 'Five-Color/Domain',
};

function getRandomDeck() {
    // Entre 1 y 5 colores, sin repetir
    const n = Math.floor(Math.random() * 5) + 1;
    const shuffled = COLORS.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function getCombinationName(deck) {
    if (deck.length === 1) return '';
    // Probar todas las permutaciones posibles del nombre de los colores
    const names = deck.map(c => c.name);
    const allCombos = getAllPermutations(names);
    for (const combo of allCombos) {
        const key = combo.join(',');
        if (COLOR_COMBINATIONS[key]) {
            return `(${COLOR_COMBINATIONS[key]})`;
        }
    }
    return '';
}

// Genera todas las permutaciones posibles de un array
function getAllPermutations(arr) {
    if (arr.length <= 1) return [arr];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const innerPerms = getAllPermutations(remaining);
        for (const perm of innerPerms) {
            result.push([current].concat(perm));
        }
    }
    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('random-deck-btn');
    const result = document.getElementById('random-deck-result');
    if (btn && result) {
        btn.addEventListener('click', () => {
            const deck = getRandomDeck();
            const comboName = getCombinationName(deck);
            result.innerHTML = deck.map(c => `${c.emoji} <b>${c.name}</b>`).join(' ') + (comboName ? ` <span style="color:#b48a2c;font-weight:600;">${comboName}</span>` : '');
        });
    }
});
