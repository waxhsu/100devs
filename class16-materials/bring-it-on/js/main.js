// *Variables*
// Create a variable and console log the value

let x = 3
console.log (x)

// Create a variable, add 10 to it, and alert the value

console.log (x += 7)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function diff(a,s,d,f){
    alert(a-s-d-f)
}

// Create a function that divides one number by another and returns the remainder

function div(x,y){
    return (x%y)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji (x,y) {
    if (x+y > 50);
    alert ('jumanji!')
}


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

// function showw (a,s,d){
//     if ((a*s*d) % 3){
//         return ('nope')
//     } else {
//         return ('yeah')
//     }
// }

function showw(a,s,d){
    let product = a*s*d
    if (product %3 === 0){
        console.log('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopy (word, number){
    for (i = 1; i <=number; i++){
        console.log(word)
    }
}
