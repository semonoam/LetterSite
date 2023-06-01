document.body.style.backgroundImage = "url('https://cdn.glitch.global/af55d866-7230-4c11-b0c8-ace17ef210a3/background%20stage%202%20with%20white.png?v=1685295469874')";
document.body.style.backgroundSize = "contain";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.overflowX = 'hidden';
document.body.style.marginLeft = "0";
document.body.style.marginRight =  "0";
document.body.style.marginBottom = "0";
document.body.style.marginTop = "0";

// Create the audio element
var audio = new Audio('https://cdn.glitch.me/af55d866-7230-4c11-b0c8-ace17ef210a3/paskol.mp3?v=1685306814498');
audio.loop = true;

// Variable to store the current playback position
var currentPosition = 0;
audio.currentTime = currentPosition;
audio.play();
//document.body.appendChild(audio);

document.addEventListener("scroll", function (scrolled) {
  var currentPixels = window.scrollY;
  console.log('currentPixels', currentPixels + 'px');
  var pageHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  if (currentPixels >= 4800) {
    currentPosition = audio.currentTime;
    currentPosition = currentPosition + 0.85;
    window.location.href = "stage3.html?value="+currentPosition;
  }
});