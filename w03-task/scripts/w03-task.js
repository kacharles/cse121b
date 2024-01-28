/* LESSON 3 - Programming Tasks */
// alert('script running')
/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2) { 
    let sum = num1 + num2; 
    return sum; 
}
function addNumbers() { 
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(add1, add2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers); 

/* Function Expression - Subtract Numbers */
function sub(num1, num2) { 
    let diff = num1 - num2; 
    return diff; 
}
function subtractNumbers() { 
    let sub1 = Number(document.querySelector('#subtract1').value); 
    let sub2 = Number(document.querySelector('#subtract2').value); 

    document.querySelector('#difference').value = sub(sub1, sub2); 
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers); 


/* Arrow Function - Multiply Numbers */

let multiply = (num1, num2) => num1 * num2; 
let multiplyNumbers = () => {
    mult1 = Number(document.querySelector('#factor1').value); 
    mult2 = Number(document.querySelector('#factor2').value); 

    document.querySelector('#product').value = multiply(mult1, mult2); 

}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers); 



/* Open Function Use - Divide Numbers */
let divide = (num1, num2) => num1 / num2; 

function divideNumbers() { 
   let div1 = Number(document.querySelector('#dividend').value);
   let div2 = Number(document.querySelector('#divisor').value); 

   document.querySelector('#quotient').value = divide(div1, div2); 
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers); 


/* Decision Structure */

// let totalDue = Number(document.querySelector('#').value); 

function message() { 
    // alert('The Get Total button has been clicked 👆🏿');
    let userInput = document.querySelector('#subTotal'); 
}
document.querySelector('#getTotal').addEventListener('click', message);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;


/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number); 

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2); 

/* Output Sum of Multiplied by 2 Array */
let doubleArray = numbersArray.map(number => number * 2); 
document.querySelector('#sumOfMultiplied').innerHTML = doubleArray.reduce((sum, number) => sum + number);
