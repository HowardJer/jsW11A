// to change text color on mouse hover

let changeColor = document.getElementById("newColor");
changeColor.addEventListener("mouseover", function (event1) {
  event1.target.style.color = "orange";
});
changeColor.addEventListener("mouseout", function (event1) {
  event1.target.style.color = "black";
});


// changed the text in <h1> from not clicked to clicked

let clickChange = document.getElementById("clickMe");
clickChange.addEventListener("click", function () {
  document.getElementById("clickMe").innerHTML = " <h1>I HAVE JUST BEEN CLICKED</h1>"
});


// let pressOn = document.getElementById("spaceBar")
// pressOn.addEventListener("keyup", function(e) {
//   if (e.keyboardEvent.code == 32) {
//     document.getElementById("welcome").style.display = "block"
//     document.getElementById("question").style.display = "none"
//   }
// });
    


document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    document.getElementById("welcome").style.display = "block";
    document.getElementById("question").style.display = "none";   


  }
}
