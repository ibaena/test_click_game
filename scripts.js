var imgElements = document.getElementById("pictures");
var startBtn = document.getElementById("startBtn");


function resetGame() {
  imgElements.style.visibility = "hidden";
  alert("Well that was fun wasn't it!?!");
}

startBtn.addEventListener("click", function(){
  imgElements.style.visibility = "visible";
  setTimeout(resetGame, 2000);
});