// // *Variables*
// // Create a variable and console log the value
var x = 5
console.log (x)

// // Create a variable, add 10 to it, and alert the value

console.log (x += 10)

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
function diff (a,s,d,f) {
    console.log (a-s-d-f)
}


// // Create a function that divides one number by another and returns the remainder
//div1 doesn't work because it will return the entire code; must use div2

function div (a,s) {
    return (a/s)
}

// // *Conditionals*
// // Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,s) {
    if (a+s > 50) {
        return 'more than 50'
    } else if (a+s === 50) {
        return '50'
    } else {
        return 'less than 50'
    }
}

// // Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function re (a,s,d) {
    if (a*s*d % 3) {
        return 'zebra'
    } else {
        return 'divisible by 3'
    }
}











// // *Variables*
// // Create a variable and console log the value
// var first = 5
// console.log(first)

// // Create a variable, add 10 to it, and alert the value
// console.log(first += 10)

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
// function diff (w,x,y,z) {
//     alert(w-x-y-z)
// }

// // Create a function that divides one number by another and returns the remainder
// function div (a, b) {
//     return a/b
// }

// // *Conditionals*
// // Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// function add (a, b) {
//     let sum = (a + b)
//     if (sum > 50){
//         alert('jumanji!')
//     } else if (sum = 50){
//         alert('exactly 50')
//     }
//     else {
//         alert('less than 50')
//     }
// }

// function add (a, b) {
//     if (a + b > 50){
//         alert('jumanji!')
//     } else if (a + b === 50){
//         alert('exactly 50')
//     }
//     else {
//         alert('less than 50')
//     }
// }

// // Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
// function mult (x, y , z){
//     let mResult = x * y * z
//     if (mResult = 3){
//         alert('ZEBRA')
//     } else {
//         alert('divisible by 3')
//     }
// }