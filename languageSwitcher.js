 
document.addEventListener('DOMContentLoaded', function () {
  const languageToggle = document.getElementById('language-toggle');
  const htmlElement = document.documentElement;
  const navbar = document.querySelector('.navbar');
  const title = document.getElementById('hero-title');

  let currentLanguage = localStorage.getItem('language') || 'en';
  if (currentLanguage === 'ar') {
    languageToggle.checked = true;
  }

  setLanguage(currentLanguage);

  languageToggle.addEventListener('change', function () {
    currentLanguage = languageToggle.checked ? 'ar' : 'en';
    setLanguage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
  });

  function setLanguage(language) {
    htmlElement.setAttribute('lang', language);
    document.body.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    if (navbar) navbar.setAttribute('dir', 'ltr');
    updateContent(language);
  }

  function updateContent(language) {
    document.querySelectorAll('[data-en][data-ar]').forEach(element => {
      element.textContent = language === 'en' ? element.dataset.en : element.dataset.ar;

      // Apply font style if it's the hero title
      if (element.id === 'hero-title') {
        element.style.fontFamily = language === 'ar' 
          ? "'Qahiri', sans-serif" 
          : "'Kaushan Script', cursive";
      }
    });
  }
});
 



// Scroll Navbar

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar-two');
  if (window.scrollY > 10) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});