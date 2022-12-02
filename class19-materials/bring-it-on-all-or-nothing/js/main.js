// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let x = true
console.log(x)

// Declare a variable, reassign it to your favorite color, and console log the value
let y = 'yellow'
y = 'blue'
console.log(y)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function poopy (a, b, c, d) {
    let result1 = (a + b + c)/d
    console.log(result1)
}

poopy (10, 20, 30, 5)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function peepy (a, b) {
    let result2 = a**b
    console.log(result2)
}


// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

    function omg (a) {
        let b = 'a string'
        if (a === true) {
            alert(b)
        } else (a === false) 
            console.log(b)
        }
    
        // a ? alert(b) : console.log(b)
// if a is true, go left. if a is false, go right
const omg = (a, b) => a ? alert(b) : console.log(b)


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num){
    for (let i = 1; i < num; i++){
        console.log(i)
    }
}







fizzBuzz(10)

