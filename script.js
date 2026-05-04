document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Ganti ikon antara menu ↔ x
    const icon = menuToggle.querySelector("i");
    if (navLinks.classList.contains("show")) {
      icon.setAttribute("data-lucide", "x");
    } else {
      icon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
  });

  // Klik di luar menu -> tutup
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("show");
      menuToggle.querySelector("i").setAttribute("data-lucide", "menu");
      lucide.createIcons();
    }
  });
});


// === Efek header transparan saat scroll ===
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

