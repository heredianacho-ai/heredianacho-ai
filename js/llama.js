const fuegoMarco = document.querySelector('.fuego-marco');

for (let i = 0; i < 80; i++) {
  const llama = document.createElement('div');
  llama.classList.add('llama');

  const lado = i % 2 === 0 ? 'left' : 'right';
  llama.style[lado] = `${Math.random() * 100}vw`;
  llama.style.animationDelay = `${Math.random()}s`;
  llama.style.height = `${20 + Math.random() * 40}px`;
  llama.style.width = `${5 + Math.random() * 10}px`;

  fuegoMarco.appendChild(llama);
}
