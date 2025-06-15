function showHearts() {
  const popup = document.getElementById('heart-popup');
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('div'); 
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 100 - 50}%`;
    heart.style.animationDelay = `${i * 0.1}s`;
    popup.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1500);
  }
}

const openPopupBtn = document.getElementById('openPopupBtn');
const popupContainer = document.getElementById('popup-container');
const maxPopups = 5;
let popupCount = 0;

