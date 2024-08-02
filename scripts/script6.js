//therMometer
function convertTemperatureRange() {
    let startValue = parseFloat(document.getElementById('startValue').value);
    let endValue = parseFloat(document.getElementById('endValue').value);
    let scale = document.getElementById('scale').value.toUpperCase();
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (let temp = startValue; temp <= endValue; temp++) {
        if (scale === 'C') {
            let fahrenheit = (temp * 9/5) + 32;
            resultsDiv.innerHTML += temp + '°C is ' + fahrenheit.toFixed(2) + '°F<br>';
        } else if (scale === 'F') {
            let celsius = (temp - 32) * 5/9;
            resultsDiv.innerHTML += temp + '°F is ' + celsius.toFixed(2) + '°C<br>';
        } else {
            resultsDiv.innerHTML = 'Invalid scale! Please use "C" for Celsius or "F" for Fahrenheit.';
            break;
        }
    }
}
 
//rollDice
// script.js

//function rollDice() {
   // const dice1 = Math.floor(Math.random() * 6) + 1;
   // const dice2 = Math.floor(Math.random() * 6) + 1;
   // const dice3 = Math.floor(Math.random() * 6) + 1;

    //document.getElementById('dice1').textContent = dice1;
    //document.getElementById('dice2').textContent = dice2;
    //document.getElementById('dice3').textContent = dice3;
//}


// script.js

// script.js

function rollDice() {
    // Roll dice for all players
    for (let i = 1; i <= 9; i++) {
        const dieFace = Math.floor(Math.random() * 6) + 1;
        document.getElementById(`dice${i}`).textContent = dieFace;
    }
    
    // Initially hide dice for players 2 and 3
    for (let i = 4; i <= 9; i++) {
        document.getElementById(`dice${i}`).textContent = '?';
    }
}

function makeBet() {
    const betValue = document.getElementById('betValue').value;
    const betFace = document.getElementById('betFace').value;
    const betInfo = document.getElementById('betInfo');

    if (betValue && betFace) {
        betInfo.textContent = `You bet there are ${betValue} dice showing face ${betFace}.`;
        
        // Reveal all dice results
        for (let i = 1; i <= 9; i++) {
            const diceElement = document.getElementById(`dice${i}`);
            if (diceElement.textContent === '?') {
                const dieFace = Math.floor(Math.random() * 6) + 1;
                diceElement.textContent = dieFace;
            }
        }
    } else {
        betInfo.textContent = 'Please enter both bet value and dice face.';
    }
}

