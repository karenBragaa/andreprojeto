const button = document.getElementById('loveButton');
const heartsContainer = document.getElementById('hearts');
const finalMessage = document.getElementById('finalMessage');
const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closePopup = document.getElementById('closePopup');

button.addEventListener('click', () => {
  createHearts(20);
  button.innerText = "Te amo, André 💖";
  button.disabled = true;

  setTimeout(() => {
    finalMessage.classList.remove('hidden');
    finalMessage.classList.add('show');
  }, 3000);
});


function createHearts(num) {
  for (let i = 0; i < num; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}


cards.forEach(card => {
  card.addEventListener('click', () => {
    popupMessage.textContent = card.getAttribute('data-message');
    popup.classList.add('active');
  });
});


closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
});
