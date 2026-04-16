// QUOTES
const quotes = [
  "< NO PAIN NO GAIN >",
  "< PUSH YOUR LIMITS >",
  "< STRONGER EVERY DAY >",
  "< TRAIN HARD STAY HUMBLE >",
  "< DISCIPLINE BUILDS CHAMPIONS >",
  "< MAKE YOUR BODY PROUD >",
];

let index = 0;
const quoteElement = document.getElementById("quote");

function changeQuote() {
  if (!quoteElement) return;

  quoteElement.classList.remove("show");

  setTimeout(() => {
    quoteElement.textContent = quotes[index];
    quoteElement.classList.add("show");

    index = (index + 1) % quotes.length;
  }, 400);
}

if (quoteElement) {
  changeQuote();
  setInterval(changeQuote, 4000);
}

// TRADUCTION
async function loadLanguage(lang) {
  const response = await fetch(`${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[key]) el.innerHTML = translations[key];
  });

  localStorage.setItem("lang", lang);
}

function changeLang(lang) {
  const langNames = { fr: "Français", en: "English" };

  const currentLangEl = document.getElementById("current-lang");
  if (currentLangEl) {
    currentLangEl.innerText = langNames[lang];
  }

  loadLanguage(lang);

  const menu = document.getElementById("lang-menu");
  if (menu) menu.classList.add("hidden");
}

// DOM READY
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  const langNames = { fr: "Français", en: "English" };

  const currentLangEl = document.getElementById("current-lang");
  if (currentLangEl) {
    currentLangEl.innerText = langNames[savedLang];
  }

  loadLanguage(savedLang);

  // MENU
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");

  if (menuBtn && sidebar && closeBtn) {
    menuBtn.onclick = () => sidebar.classList.add("active");
    closeBtn.onclick = () => sidebar.classList.remove("active");
  }
});

// FAQ TOGGLE
const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
  q.onclick = () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("show");
  };
});

document.querySelectorAll(".faq-question").forEach((q) => {
  q.onclick = () => {
    q.classList.toggle("active");

    const answer = q.nextElementSibling;
    answer.classList.toggle("show");
  };
});


// LANG MENU
function toggleMenu() {
  const menu = document.getElementById("lang-menu");
  if (menu) menu.classList.toggle("hidden");
}
