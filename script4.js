// Make variables out of the elements we will manipulate
var counter = document.querySelector(".counter");
var body = document.querySelector("body");

// Scenes
var scene = document.querySelector(".scene");
var sceneText = document.querySelector(".scene-text");

document.addEventListener("scroll", function (scrolled) {
  var currentPixels = window.scrollY;

  counter.innerHTML =
    "You're scrolling currently at " + currentPixels + " pixels ";

  if (currentPixels == 0) {
    //scene.style.backgroundImage = "url('https://media.gettyimages.com/id/73382653/photo/justin-timberlake-from-pop-group-nsync-poses-for-an-august-1999-portrait-in-los-angeles.jpg?s=612x612&w=gi&k=20&c=sNQ7pdJqggerkUlcMEMd8BhyEV3r5IAnb7fdJDBmEfc=')";
    sceneText.innerHTML = "scene 1";
    //body.style.backgroundColor = "red";
  }

  if (currentPixels > 200) {

    //var scrollProgress = 100 - ((currentPixels - 200) * 200 / 400);

    //textContainer.style.height = (scrollProgress * textContainer.scrollHeight) + 'px';
    //textContainer.style.opacity = 1 - (scrollProgress / 100);
    //textContainer.style.transform = 'translateY(' + scrollProgress + '%)';
    scene.style.backgroundImage = "";
    sceneText.innerHTML = "scene 2";
    //body.style.backgroundColor = "blue";
  }

  if (currentPixels > 400) {
    //textContainer.classList.remove("visible");
    //textContainer.classList.add("not-visible");
    //scene.style.backgroundImage = "url('https://cdn.glitch.global/f26b7820-38c8-45b7-a6ec-28d67c5718e7/still3.png?v=1683533597262')";
    sceneText.innerHTML = "scene 3";
    //body.style.backgroundColor = "yellow";
  }

  if (currentPixels > 600) {
    //scene.style.backgroundImage = "url('https://cdn.glitch.global/f26b7820-38c8-45b7-a6ec-28d67c5718e7/still4.png?v=1683533604813')";
    sceneText.innerHTML = "sCENE4";
    window.location.href = "stage2.html";
    //body.style.backgroundColor = "beige";
  }
});
