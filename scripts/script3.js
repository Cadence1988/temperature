
function practice(){
    console.log('practice');
    let num1=50;
    let num2=50;

    if(num1>num2){
        console.log("The num1 is not greater than num2");
    }else if(num1<num2){
        console.log('the num1 is less than the num2');
    }else{
        console.log('The numbers are equal');
    }
}

// Challenge: Driving License
// 1. Prompt the user to enter their age.
// 2. Use an if-else statement to determine if the person can get a driving license.
// 3. If the age is 18 or older, print "Congratulations! You can get your driving license."
// 4. If the age is less than 18, print "Sorry, you are too young to get a driving license."

function enterAge(){
    let age = prompt('Enter your age');
    let num1=18;

    if(age > num1){
        console.log('congratulations YOU may get a liscence');
    }else if(age == num1){
        console.log('You may get your liscense')
    }else{
        console.log('You are too  young to drive')
    }
}


// Exercise: Guess the Number Game
// 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
// 2. Ask the user to guess the number. (prompt)
// 3. Use an if-else statement to check if the user's guess is correct.
// 4. If the guess is correct, print on the HTML "Congratulations! You guessed the number."
// 5. If the guess is incorrect, print on the HTML "Sorry, that's not correct. The number was [generated number]".

function guessNum(){
    let randNum = Math.floor(math.random() * 10) + 1)
    let userGuess = promt('Guess a number between 1 and 10');


    if (userGuess == randNum){
        document.getElementById('result').innerHTML = 'Congrats!';
    }else{
        document.getElementById('result').innerHTML = 'That is the the wrong number, the number was' + randNum + '.';
    }

    
}

