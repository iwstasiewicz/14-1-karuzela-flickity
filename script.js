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


(function () {

  var templateList = document.getElementById('template-product-list').innerHTML;
  var templateItem = document.getElementById('template-product-item').innerHTML;

  Mustache.parse(templateItem);

  var listItems = '';

  for (var i = 0; i < productsData.length; i++) {
    console.log(productsData);
    listItems += Mustache.render(templateItem, productsData[i]);
  }

  var fullProductList = Mustache.render(templateList, {
    products: listItems
  });

  results.insertAdjacentHTML('beforeend', fullProductList);


})();