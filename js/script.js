// Efek spotlight coklat yang mengikuti kursor di hero section
const hero = document.getElementById('hero');
const spot = document.getElementById('spotlight');

if (hero && spot) {
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spot.style.setProperty('--x', x + '%');
    spot.style.setProperty('--y', y + '%');
  });
}

window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Header berubah gaya saat halaman di-scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});
