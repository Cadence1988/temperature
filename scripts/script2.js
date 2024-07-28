// creating a function
//function multiplication(myNumber){
    //console.log(myNumber * 5)
//}

//multiplication(3);//run / execute a function

//function taxesCalculation(){
   // var product = prompt("Enter the product's name:");
    //var price = Number(prompt('Enter the price:'));
    //var qty = Number(prompt('Enter the qty:'));
    //var subtotal=price*qty;
    //var total = subtotal*taxes;

    //console.log(prosduct);
    //console.log(subtotal);
//}


function convertTemp() {
    let celsius = prompt("Enter the temperature in Celsius:");

    // Convert the input to a number
    celsius = parseFloat(celsius);

    // Check if the input is a valid number
    if (isNaN(celsius)) {
        console.log("Invalid input. Please enter a valid number.");
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("The temperature in Fahrenheit is: " + fahrenheit);
    document.getElementById("result").innerHTML = "The temperature in Fahrenheit is: " + fahrenheit;
    ;
}
