var imgElements = document.getElementsByClass("pictures");
var startBtn = document.getElementById("startBtn");

function showPictures () {
  for(var i = 0; i < imgElements.length; i++) {
    imgElements.setAttribute("visibility", "visible");
  }
}

startBtn.addEventListener("click", showPictures());

for(var i = 0; i < imgElements.length; i++) {
  imgElements[i].addEventListener("click", function() {
    alert("You clicked");
  });