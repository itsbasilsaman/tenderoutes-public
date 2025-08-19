// Rotates hero background images every second in a loop
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
    hero.classList.remove('background-one', 'background-two', 'background-three');
    idx = (idx + 1) % backgrounds.length;
    hero.classList.add(backgrounds[idx]);
  }, 2000);
})();
