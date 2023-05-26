var body = document.querySelector("body");
var textContainer = document.getElementById("text-container");

document.addEventListener("scroll", function (scrolled) {
  var currentPixels = window.scrollY;

  //fetch("kaki.txt")
  //  .then((response) => response.text())
  //  .then((data) => {
  //    textContainer.textContent = data;
  //  });
  //textContainer.textContent = "asdasdasd";
  var textContainerHeight = textContainer.offsetHeight;
  var bodyHeight = document.body.offsetHeight;
  console.log('Body Height:', bodyHeight + 'px');
  console.log('Text Container Height:', textContainerHeight + 'px');
  console.log('Pixels:', currentPixels + 'px');



  if (currentPixels > bodyHeight*0.5 + 10) {
    window.location.href = "stage3.html";
  }
});
