// ====== Menu mobile ======
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Fermer le menu quand on clique sur un lien (mobile)
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});

// ====== Année dans le footer ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== Thème clair/sombre (avec sauvegarde) ======
const btnTheme = document.getElementById("btnTheme");

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
    btnTheme.textContent = "☀️";
  } else {
    document.body.classList.remove("light");
    btnTheme.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

btnTheme.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

// ====== Animation des barres de compétences au scroll ======
const fills = document.querySelectorAll(".fill");

function animateSkills() {
  const trigger = window.innerHeight * 0.85;
  fills.forEach((fill) => {
    const rect = fill.getBoundingClientRect();
    const level = fill.dataset.level;

    if (rect.top < trigger && fill.style.width === "0%") {
      fill.style.width = level + "%";
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);


  // Petite validation simple
  if (!name || !email || !message) {
    statusEl.textContent = "Veuillez remplir tous les champs.";
    return;
  }


  // Reset du formulaire
  form.reset();

