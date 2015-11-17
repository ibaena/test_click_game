var imgElements = document.getElementById("pictures");
var startBtn = document.getElementById("startBtn");
var images = document.getElementsByClassName("img.responsive");
var myCount = 0;


function resetGame() {
  imgElements.style.visibility = "hidden";
  alert("Well that was fun wasn't it!?! You got " + myCount + " of 18!");
  // reset all data states here
}

for(var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    if (this.getAttribute("data-state") === "pushed") {
      return;
    } else {
      setAttribute("data-state", "pushed");
      myCount++;
    }
  });
}

startBtn.addEventListener("click", function() {
  imgElements.style.visibility = "visible";
  setTimeout(resetGame, 2000);
});