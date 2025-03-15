
function rollDice(diceAmount) {
    //declare vars

    var result = [];
    var simpleResult = '';
    var formNode = document.querySelector("form");
    var diceMarkup = '';
    var diceType = document.getElementById("dice-type").value;
    var diceSides = '';

    if(diceAmount > 12 || diceAmount == '' || diceAmount == '0') {
        document.getElementById("short-result").innerHTML = 'Please select a number of dice between one and twelve';
        return false;
    }

    /*
        It was either create an array and match key/value pairs, or switch statement. ~same length either way, this is easier.
        
        This takes the dice type select field value, then assigns the side value to the diceSides var to use with random number generation.

    */
    switch (diceType) {
        case 'd4-dice': diceSides = 4;
        break;
        case 'd6-dice': diceSides = 6;
        break;
        case 'd8-dice': diceSides = 8;
        break;
        case 'd10-dice': diceSides = 10;
        break;
        case 'd12-dice': diceSides = 12;
        break;
        case 'd20-dice': diceSides = 20;
        break;
        default: diceSides = -1;
        break;
    }

    //Validator to ensure that a dice type is selected
    if (diceSides == -1){
        document.getElementById("short-result").innerHTML = 'Please select a dice type';
        return false;
    }

    //Roll the dice, did I mention my middle name is 'danger'?
    for (i = 0; i < diceAmount; i++) {
        var singleRoll = '';
        //var diceType = 'd6-dice';

        //Simple Math Magic.
        singleRoll = Math.floor(Math.random() * diceSides + 1);

        //Append roll result to final results array
        result.push(singleRoll);
        
        diceMarkup += '<div class="' + diceType + ' one-digit dice-entry">'; //Start build - single die

        diceMarkup += '<div class="result-number one-digit">' + singleRoll + '</div>'; //Inner result number

        diceMarkup += '</div>'; //Close parent div

    }
    //Close result markup element
    diceMarkup += '</div>'
    //Calculate sum
    var diceSum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    //Append sum markup to result
    simpleResult = 'Rolls: ' + result + ' | Sum = ' + diceSum;
    document.getElementById("short-result").innerHTML = '';
    document.getElementById("short-result").innerHTML = simpleResult;
    //Put the things on the page
    document.getElementById("dice-result").innerHTML = diceMarkup;
    //Surely we need an output, right?
    return result;
};

/* rollDice(document.getElementById('dieCount'.value)) */

/* JS for the credits on the bottom left */
const names = ["Alan V", "Ethan N", "Jeremy M"];

let current = 0;
let interval = setInterval(updateNames, 1500);
const nameLocation = document.getElementById("names");

function updateNames(){
  current++;
  current = current % names.length;
  nameLocation.innerText = names[current];
};

/* JS for the carousel on the bottom right */
// Array for objects, all containing necessary information to produce the carousel and keeps everything ordered
const images = [ 
    {src: "images/beach1.jpg", alt: "Sunny beach with sunset"},
    {src: "images/beach2.jpg", alt: "Sunny beach with palm trees"},
    {src: "images/beach3.jpg", alt: "Sunny beach with trees"},
];
//Sound files
const sound1 = new Audio('sounds/arcade-sound.wav');
const sound2 = new Audio('sounds/sweep-sound.wav');

// Initializing necessary variables to change the slides 
let currentIndex = 0;
const carouselImg = document.getElementById("carouselImg");
const pButton = document.getElementById("prev");
const nButton = document.getElementById("next");

// Changes the slide to the "next" slide by changing the image and description to the next in the array
function updateSlide(index) {
  carouselImg.src = images[index].src;
  carouselImg.alt = images[index].alt;
}

// Displays the next image and description in the array 
function nextSlide() {
  sound1.play();
  currentIndex++;
  currentIndex = currentIndex % images.length;
  updateSlide(currentIndex);
  resetTimer();
}

// Displays the previous image and description in the array
function previousSlide() {
  sound2.play();
  currentIndex--;
  currentIndex = currentIndex % images.length;
  updateSlide(currentIndex);
  resetTimer();
}

// Initialize all necessary variables for the timer 
let timer = 3;
let interval2;
const time = document.getElementById("timer");

// Resets the timer and its display
function resetTimer(){
  clearInterval(interval2)
  timer = 3;
  time.textContent = timer;
  startTimer();
}

// Sets the timer to count down every second
function startTimer(){
  interval = setInterval(timerAdjustment, 1000);
}

// Called every second, updating the display and if the time hits zero, moves onto the next slide
function timerAdjustment(){
  timer--;
  time.textContent = timer;
  if (timer === 0){
    nextSlide();
  }
}

// Event listeners for the next and previous buttons to call the correct function 
pButton.addEventListener("click", previousSlide);
nButton.addEventListener("click", nextSlide);

// Necessary function calls for correct display when the website opens
updateSlide(currentIndex);
startTimer();