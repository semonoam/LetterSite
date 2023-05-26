// Make variables out of the elements we will manipulate
var counter = document.querySelector(".counter");
var body = document.querySelector("body");

// Scenes
var scene = document.querySelector(".scene");
var sceneText = document.querySelector(".scene-text");
var textContainer = document.getElementById("text-container");

document.addEventListener("scroll", function (scrolled) {
  var currentPixels = window.scrollY;

  counter.innerHTML =
    "You're scrolling currently at " + currentPixels + " pixels ";

  fetch("kaki.txt")
    .then((response) => response.text())
    .then((data) => {
      textContainer.textContent = data;
    });
  var targetPosition = textContainer.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;
  var scrollProgress = 1 - targetPosition / screenPosition;
  //textContainer.style.opacity = scrollProgress / 100;
  //textContainer.style.transform = "translateY(" + (scrollProgress * 100) + "%)";
  scene.style.backgroundImage = "";
  //sceneText.innerHTML = "scene 2";
  //body.style.backgroundColor = "blue";
    if (currentPixels > 1700) {
    //scene.style.backgroundImage = "url('https://cdn.glitch.global/f26b7820-38c8-45b7-a6ec-28d67c5718e7/still4.png?v=1683533604813')";
    //sceneText.innerHTML = "scene 4";
    window.location.href = "stage4.html";
    //body.style.backgroundColor = "beige";
  }
});
