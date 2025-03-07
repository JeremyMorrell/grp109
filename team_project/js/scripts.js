
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
        default: diceSides = 6;
        break;
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
    simpleResult = result + ' | Sum = ' + diceSum;
    document.getElementById("short-result").innerHTML = '';
    document.getElementById("short-result").innerHTML = simpleResult;
    //Put the things on the page
    document.getElementById("dice-result").innerHTML = diceMarkup;
    //Surely we need an output, right?
    return result;
};

/* rollDice(document.getElementById('dieCount'.value)) */