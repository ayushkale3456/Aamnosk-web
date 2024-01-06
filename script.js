const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardHeight = card.offsetHeight;
        const windowHeight = window.innerHeight;

        if (cardTop <= windowHeight - cardHeight / 3) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
});

// control video playback and opacity based on user interaction
const video = document.querySelector('video');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    video.playbackRate = 0.5; /* Adjust playback speed */
  } else {
    video.playbackRate = 1;
  }
});

const contentOverlay = document.querySelector('.content-overlay');

contentOverlay.addEventListener('mouseover', () => {
  contentOverlay.style.opacity = 0.5; /* Adjust hover opacity */
});

contentOverlay.addEventListener('mouseout', () => {
  contentOverlay.style.opacity = 0.8; /* Adjust default opacity */
});



// Get current year
const currentYear = new Date().getFullYear();

// Update expiry year element with current year + 1
document.getElementById('expiryYear').textContent = currentYear + 1;
