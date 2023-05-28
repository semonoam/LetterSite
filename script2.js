document.body.style.backgroundImage = "url('https://cdn.glitch.global/af55d866-7230-4c11-b0c8-ace17ef210a3/background%20stage%202%20with%20white.png?v=1685295469874')";
document.body.style.backgroundSize = "contain";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.overflowX = 'hidden';
document.body.style.marginLeft = "0";
document.body.style.marginRight =  "0";
document.body.style.marginBottom = "0";
document.body.style.marginTop = "0";

var body = document.querySelector("body");
//var textContainer = document.getElementById("letter");

document.addEventListener("scroll", function (scrolled) {
  var currentPixels = window.scrollY;
  console.log('currentPixels', currentPixels + 'px');
  var pageHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  if (currentPixels >= 4800) {
    window.location.href = "stage3.html";
  }
});
