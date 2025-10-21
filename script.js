// ==============================
// NAVBAR ACTIVE LINK
// ==============================
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('nav ul li a').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});

// ==============================
// PENYESUAIAN MARGIN KONTEN
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header.atas");
  const konten = document.querySelector(".konten");

  if (header && konten) {
    const headerHeight = header.offsetHeight;
    konten.style.marginTop = headerHeight + 20 + "px";
  }
});

// ==============================
// SLIDER GAMBAR OTOMATIS
// ==============================
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(n) {
  if (n >= images.length) index = 0;
  if (n < 0) index = images.length - 1;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener('click', () => {
  index++;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index--;
  showSlide(index);
});

setInterval(() => {
  index++;
  showSlide(index);
}, 4000);

// ==============================
// POPUP ZOOM IMAGE FULLSCREEN
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const slideImages = document.querySelectorAll('.slides img');

  // Buat elemen popup overlay
  const popup = document.createElement('div');
  popup.classList.add('image-popup');
  popup.innerHTML = `
    <span class="close-btn">&times;</span>
    <img src="" alt="popup">
  `;
  document.body.appendChild(popup);

  const popupImg = popup.querySelector('img');
  const closeBtn = popup.querySelector('.close-btn');

  // Klik gambar untuk membuka popup
  slideImages.forEach(img => {
    img.addEventListener('click', () => {
      popupImg.src = img.src;
      popup.classList.add('active');
      document.body.style.overflow = 'hidden'; // biar ga bisa scroll waktu popup aktif
    });
  });

  // Klik tombol X untuk menutup
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Klik luar gambar juga menutup
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

document.getElementById("formKontak").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    const btn = document.getElementById("btnKirim");

    if (!nama || !email || !pesan) {
        alert("Harap isi semua kolom sebelum mengirim!");
        return;
    }

    btn.textContent = "Mengirim...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    setTimeout(() => {
        alert(`Terima kasih, ${nama}! Pesan kamu sudah terkirim.`);
        document.getElementById("formKontak").reset();
        btn.textContent = "Kirim";
        btn.disabled = false;
        btn.style.opacity = "1";
    }, 1500);
});

