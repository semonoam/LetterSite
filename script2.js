document.body.style.backgroundImage = "url('https://cdn.glitch.global/af55d866-7230-4c11-b0c8-ace17ef210a3/background%20stage%202.png?v=1685226934362')";
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
  //debug
  var currentPixels = window.scrollY;
  var pageHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  if (scrollPosition + windowHeight >= pageHeight) {
    window.location.href = "stage3.html";
  }
});
