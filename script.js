const button = document.getElementById('prize-btn');
const title = document.getElementById('main-title');
const text = document.getElementById('main-text');
const gifContainer = document.getElementById('gif-container');

button.addEventListener('click', () => {
  title.textContent = 'НЕУДАЧНИЦА! ВОЗЬМИ КАКАШКУ! Я УКРАЛА ТВОИ ДЕНЬГИ!!! 🤣👅💸';
  text.textContent = '';


  gifContainer.innerHTML = '';

  const poopGifs = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjRwZ2xndXFmdWluNGR4cjRlaTZuYWY3cW5lZ2lqcGhyN29paW8xYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fUYhyT9IjftxrxJXcE/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3kxajk4N2h5OXNlY3g2Nzh2NzlidnRlNGxjMGp5aHhtaGI4ODdhdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yEZjzglgjrMUo/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb29wdmdrYjc0Zmc1c3l5MmNjOGd5Z2h5a3NkODkydGVqZmxrZ2Q1MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlE1f2qNA8paMak/giphy.gif'
  ];

  poopGifs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Poop meme gif';
    img.style.maxWidth = '150px';
    img.style.borderRadius = '12px';
    img.style.margin = '0 7px';
    gifContainer.appendChild(img);
  });


  button.style.display = 'none';
});
