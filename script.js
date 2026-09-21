document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 150);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
  
  // Ketikan otomatis
  const text = "\"Hidup ini bukan tentang dimanakah kita akan berjalan, dengan siapakah kita akan berjalan, tetapi mau kemanakah arah langkah kita akan berjalan.\" ";
  let index = 0;

  function typeEffect() {
    const target = document.getElementById("type-text");
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 35); // kecepatan ketik
    }
  }

  // Scroll reveal
  function revealMotivasi() {
    const element = document.getElementById("motivasi-anim");
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      element.classList.add("active");
      typeEffect(); // mulai ketikan saat tampil
      window.removeEventListener("scroll", revealMotivasi); // hanya sekali
    }
  }
  window.addEventListener("scroll", revealMotivasi);

  
  const toggle = document.getElementById('darkModeSwitch');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Tab Switching
function filterTab(tab) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tablink");
  tabs.forEach(el => el.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// Konfirmasi Download CV
function confirmDownload(event) {
  event.preventDefault();
  if (confirm("Yakin ingin mendownload CV?")) {
    window.location.href = "CV Alfredo Raul Adamsyah.pdf";
  }
}


  