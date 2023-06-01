document.body.style.backgroundImage = "url('https://cdn.glitch.global/af55d866-7230-4c11-b0c8-ace17ef210a3/background%20stage%203%20black.png?v=1685295471189')";
document.body.style.backgroundSize = "auto";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.overflowY = 'hidden';
document.body.style.marginLeft = "0";
document.body.style.marginRight =  "0";
document.body.style.marginBottom = "0";
document.body.style.marginTop = "0";
document.body.style.width = '12000px';
document.body.style.height = '1080px';

const urlParams = new URLSearchParams(window.location.search);
const value = parseInt(urlParams.get('value'));
console.log('val', value);

var audio = new Audio('https://cdn.glitch.me/af55d866-7230-4c11-b0c8-ace17ef210a3/paskol.mp3?v=1685306814498');
audio.loop = true;
audio.currentTime = value;
audio.play();


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
        if (currentPixels > 8700) {
          currentPosition = audio.currentTime;
          currentPosition = currentPosition + 0.7;
          window.location.href = "stage3.1.html?value="+currentPosition;
      }
  });
});


