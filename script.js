var flkty = new Flickity('.carousel', {
  "hash": true
});

// FUNKCJA DO BUTTONA "RESTART"

var previousButton = document.querySelector('.button--previous');
previousButton.addEventListener('click', function () {
  flkty.select(0);
});

// FUNKCJA DO PASKA PRZEWIJANIA

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});