// Rotates hero background images every second in a loop

// Smooth fade-in animation for hero background images
(function() {
  var backgrounds = [
    'background-one',
    'background-two',
    'background-three'
  ];
  var hero = document.querySelector('.home-two-hero-main');
  if (!hero) return;
  var idx = 0;
  setInterval(function() {
    // Start fade out
    hero.classList.add('fade-out');
    setTimeout(function() {
      hero.classList.remove('background-one', 'background-two', 'background-three');
      idx = (idx + 1) % backgrounds.length;
      hero.classList.add(backgrounds[idx]);
      // Start fade in
      hero.classList.remove('fade-out');
      hero.classList.add('fade-in');
      setTimeout(function() {
        hero.classList.remove('fade-in');
      }, 600); // match CSS transition duration
    }, 400); // fade out duration
  }, 3000);
})();
