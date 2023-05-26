document.body.style.width = '8000px';
document.body.style.height = '100%';
//document.body.style.overflowX = 'scroll';
//document.body.style.overflowY = 'hidden';

document.addEventListener("scroll", function (scrolled) {

});


window.addEventListener('DOMContentLoaded', function() {
  var scrolling = false;

  document.addEventListener('wheel', function(event) {
    //event.preventDefault();
    console.log('Im WHEEL');
      console.log('Im TRUE');
      scrolling = true;
      var scrollAmount = event.deltaY;
      console.log('scrollAmount', scrollAmount + 'px');
      window.scrollBy({
        left: scrollAmount,
      });
      var currentPixels = window.scrollX;
      console.log('currentPixels', currentPixels + 'px');
      console.log('document.body.style.width * 0.7', (document.body.clientWidth * 0.7) + 'px');

        if (currentPixels > (document.body.clientWidth * 0.7)) {
          console.log('Im 4');
          window.location.href = "stage4.html";
      }
  });
});

