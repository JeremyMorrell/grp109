
function rollDice(diceAmount) {
    //declare vars

    var result = [];
    var simpleResult = '';
    var formNode = document.querySelector("form");
    var diceMarkup = '';

    if(diceAmount > 12 || diceAmount == '' || diceAmount == '0') {
        document.getElementById("short-result").innerHTML = 'Please select a number of dice between one and twelve';
        return false;
    }

    //Roll the dice, did I mention my middle name is 'danger'?
    for (i = 0; i < diceAmount; i++) {
        var singleRoll = '';
        var diceType = 'd6-dice';
        //Simple Math Magic.
        singleRoll = Math.floor(Math.random() * 6 + 1);
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