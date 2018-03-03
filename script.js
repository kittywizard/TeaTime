//Tea Time
// So you don't oversteep your tea at work

var green, white, black;
var timeDiv = document.getElementById('timeDiv');
var input2MS, timer;

green = document.getElementById('green');
white = document.getElementById('white');
black = document.getElementById('black');

var hideButtons = document.getElementById('buttons');

var content = document.querySelector('.content');

//CLICK EVENT GREEN TEA
green.addEventListener("click", function() {
  hideEverything();

  //display green Tea info
  var greenDiv = document.createElement('div');
  greenDiv.innerHTML =
            "<span class='subHeadline'>Green Tea</span>\
            <p>Water Temperature: 160&deg; to 180&deg;</p>\
            <img src='http://placekitten.com/g/300/300' width='300px' height='300px'>\
            <form>\
              <label for='timeToConvert'>Enter Minutes:</label>\
              <input id='timeToConvert' type=number' /></input>\
              <button id='submitButton' type='button'>Submit</button>\
            </form>\
            <button type='button' id='pleasestop'>STOP</button>\
            ";
            //put backslashes on the innerHTML multiple lines

  //this will add all that innerHTML stuff to the div....
  document.getElementById('greenTea').appendChild(greenDiv);

});

white.addEventListener("click", function() {
  console.log(white);
});

black.addEventListener("click", function() {
  console.log(black);
});

submitButton.addEventListener("click", function() {
  //don't enter zero
  if (document.getElementById('timeToConvert').value == 0) {
    alert("YOU ARE DUMB");
  }
  else {
    input2MS =  (document.getElementById('timeToConvert').value * 60) * 1000;
    timer =  setInterval(function() {
      console.log(input2MS -= 1);
      //display this on screen
    timeDiv.innerHTML = input2MS;
    }, 1000); //every  second
  }

});

//function to hide everything -- works on all buttons!
function hideEverything() {
  hideButtons.classList.toggle("goAway");
  //also hide 'choose your type' since its no longer relevant
  document.getElementById('chooseType').classList.toggle('goAway');
}
