// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = ' Custarded milk '
favDrink = favDrink.trim()
console.log (favDrink)


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".


let str = 'water apple mug bluewaffle lemonparty'
console.log(str.includes('apple'))

if(str.search('apple') !== -1){
    console.log('yes')
} else {
    console.log('no')
}


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let result = Math.random()
        if (result < .33){
            return 'rock'
        } else if (result < .66){
            return 'paper'
        } else {
            return 'scissors'
        }
    }

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(choice){
    let botChoice = rockPaperScissors()
    if (choice == 'rock' && botChoice == 'paper' || choice == 'paper' && botChoice == 'scissors' || choice == 'scissors' && botChoice == 'rock') {
        console.log ('You lose.......')
    } else if (choice === botChoice) {
        console.log ('Tied')
    } else {
        console.log ('You win!')
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playerInput(arr) {
    arr.forEach( choice => checkWin(choice))
}

playerInput(['rock', 'paper', 'scissor'])
