//Tea Time
// So you don't oversteep your tea at work

var green, white, black;

green = document.getElementById('green');
white = document.getElementById('white');
black = document.getElementById('black');

var content = document.querySelector('.content');


green.addEventListener("click", function() {
  //hide all buttons
  white.classList.toggle("buttonOff");
  black.classList.toggle("buttonOff");
  this.classList.toggle("buttonOff");

  //display green Tea
  //get   

  //timer

  //reset?
});

white.addEventListener("click", function() {
  console.log(white);
});

black.addEventListener("click", function() {
  console.log(black);
});
