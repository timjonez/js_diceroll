let randomNumber1 = Math.floor(Math.random() *6)+1;
let randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource1 = "images/" + randomDiceImage1;
let randomImageSource2 = "images/" + randomDiceImage2;

let image1 = document.querySelectorAll('img')[0];
let image2 = document.querySelectorAll('img')[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = '  Player 1 wins';
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = 'Player 2 wins'
}else{document.querySelector("h1").innerHTML = 'Tie'}
