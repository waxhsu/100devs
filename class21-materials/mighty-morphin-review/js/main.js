// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = 'cny'
favHoliday = favHoliday.toUpperCase()

console.log(favHoliday)


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = 'peepeepoopoo'

let twoWords = str.slice(-3)

console.log(twoWords)



// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function minusFiveAndAbs(z) {
    bigMinus1 = 0
    for (let i = 0; i<z.length; i++){
        bigMinus1 -= 100 - z[i]
        console.log(Math.abs(bigMinus1))
    }
}

minusFiveAndAbs([10, 20, 30, 40, 50])


// funk2 = (x) => {

// }

// funk2([10, 20, 30, 40, 50])

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function prax1 (arr){
    console.log(arr[0] + ' ' + arr[arr.length-1])
}
prax1([1,2,3,4,5])


function solution2 (a,s,d,f,g) {
    let min = Math.min(a,s,d,f,g)
    let max = Math.max(a,s,d,f,g)
    console.log(`small boi is ${min} and big boi is ${max} `)
}

solution2(52,45,22,12,42)


function solution3 (array1) {
    let min = Math.min(array1)
    let max = Math.max(array1)
    console.log(`small boi is ${min} and big boi is ${max} `)
}
solution3([52,5,22,12,421])



// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


function prax2() {
    console.log(Math.random())
}

/* function headOrTails(){
    let result = Math.random()
    if (result < .5){
        return 'heads'
    } else {
        return 'tails'
    }
} */

const headOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'


// console.log(headOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.


function flipFlip(n) {
    for(let i = 1; i<= n ; i++){
        let result = headOrTails()
        console.log(result)
    }
}

flipFlip(10)