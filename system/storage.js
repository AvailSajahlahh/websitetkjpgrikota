const input = document.getElementById("masukan");
const listContainer = document.getElementById("masukanContainer");
const btn = document.getElementById("kirimBtn");

// Load data lama dari localStorage
window.onload = function() {
  const saved = JSON.parse(localStorage.getItem("masukanList")) || [];
  saved.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listContainer.appendChild(li);
  });
};

// Klik kirim
btn.addEventListener("click", function() {
  const value = input.value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    listContainer.appendChild(li);

    // simpan ke localStorage
    const saved = JSON.parse(localStorage.getItem("masukanList")) || [];
    saved.push(value);
    localStorage.setItem("masukanList", JSON.stringify(saved));

    input.value = "";
  } else {
    alert("AYO ISI DONG JANGAN MALES");
  }
});
