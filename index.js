var randomNumber1 = Math.floor((Math.random()*6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";  //generates random dice images
//we have to tap in src element of image to change it randomly

var randomImageSource = "images/" + randomDiceImage;

var randomImage1 = document.querySelectorAll("img")[0];
randomImage1.setAttribute("src", randomImageSource);

//if we simply copy paste code and change 1->2 the dice will show same randomNumber1

var randomNumber2 = Math.floor((Math.random()*6) + 1);
var randomImagesource2 = "images/dice" + randomNumber2 + ".png";

var randomImage2 = document.querySelectorAll("img")[1];
randomImage2.setAttribute("src", randomImagesource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!! 🚩";   //WATCH TYPOS VERY CAREFULLY!!!!!!!!!
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩🚩";
}

else{
  document.querySelector("h1").innerHTML = "it's a draw";
}
