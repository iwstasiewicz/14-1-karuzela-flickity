var flkty = new Flickity('.carousel');

// FUNKCJA DO BUTTONA "RESTART"

var previousButton = document.querySelector('.button--previous');
previousButton.addEventListener('click', function () {
  flkty.previous();
});

var previousWrappedButton = document.querySelector('.button--previous-wrapped');
previousWrappedButton.addEventListener('click', function () {
  flkty.previous(true);
});

// FUNKCJA DO PASKA PRZEWIJANIA

var flkty = new Flickity('.carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});