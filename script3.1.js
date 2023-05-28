document.body.style.backgroundImage = "url('https://cdn.glitch.global/af55d866-7230-4c11-b0c8-ace17ef210a3/background%20stage%203.1%20yellow.png?v=1685295476237')";
document.body.style.backgroundSize = "10000px 1025px";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.overflowY = 'hidden';
document.body.style.marginLeft = "0";
document.body.style.marginRight =  "0";
document.body.style.marginBottom = "0";
document.body.style.marginTop = "0";
document.body.style.width = '12500px';
document.body.style.height = '1000px';

window.addEventListener('DOMContentLoaded', function() {
  var scrolling = false;

  document.addEventListener('wheel', function(event) {
    //event.preventDefault();
      scrolling = true;
      var scrollAmount = event.deltaY;
      console.log('scrollAmount', scrollAmount + 'px');
      window.scrollBy({
        left: scrollAmount,
      });
      var currentPixels = window.scrollX;
      console.log('currentPixels', currentPixels + 'px');
        if (currentPixels > 10000) {
          window.location.href = "stage4.html";
      }
  });
});

