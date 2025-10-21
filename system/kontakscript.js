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