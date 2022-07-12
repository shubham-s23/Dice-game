var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageRandomName = "dice" + randomNumber1 + ".png";
var imageSource =  imageRandomName;

document.querySelector(".img1").setAttribute("src", imageSource);

//***************************************************************************

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageRandomName = "dice" + randomNumber2 + ".png";
var imageSource =  imageRandomName;

document.querySelector(".img2").setAttribute("src", imageSource);

//*************************************************************************

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "DRAW";
} 
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Winner Is Player : 1 🥇";
} 
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Winner Is Player : 2 🥇";
}
