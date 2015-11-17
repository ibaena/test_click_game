var pictures = document.getElementsByClass("pictures");
var emailFormGroup = document.getElementById("emailFormGroup");
var imageElements = document.getElementsByTagName('img');

function showEmailField() {
  emailFormGroup.setAttribute("class", "form-group");
}

function hideEmailField() {
  emailFormGroup.setAttribute("class", "hidden");
}

exampleInputName2.addEventListener("focus", showEmailField);
exampleInputName2.addEventListener("blur", hideEmailField);

for(var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener("click", function() {
    alert("You clicked");
  });  
}