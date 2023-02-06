// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let str = 'ruxin is a doggo?'

const qOrNah = _ => str.includes('?') ? 'it is a question' : 'it is not a question'

console.log(qOrNah(str))

// console.log(str.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let str1 = 'george minute jr. dev recent four gall bladder'

console.log(str1.replaceAll('jr. dev', 'software engineer'))
//FUCK IDK


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPS() {
    if (Math.random < .33) {
        return 'rock'
    } else if (Math.random < .66) {
        return 'paper'
    } else {
        return 'scissor'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(choice) {
    if (choice.toLowerCase === 'rock' && rockPS() === 'paper' || choice.toLowerCase === 'paper' && rockPS() === 'scissor' || choice.toLowerCase === 'scissor' && rockPS() === 'rock') {
        console.log('you loooooooooooose')
    } else if (choice.toLowerCase === rockPS()) {
        console.log('titietieiteietieititeititties')
    } else {
        console.log('you r wiener')
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playerInput(arr){
    arr.forEach(choice => checkWin(choice))
}



