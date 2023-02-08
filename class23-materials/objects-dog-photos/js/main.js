//Get a dog photo from the dog.ceo api and place the photo in the DOM





function rockPaperScissors(){
    if (Math.random() > .66) {
        return 'rock'
    } else if (Math.random() > .33) {
        return 'paper'
    } else {
        return 'scissor'
    }
}


function checkWin(choice){
    let botChoice = rockPaperScissors()
    if (choice == 'rock' && botChoice == 'paper' || choice == 'paper' && botChoice == 'scissors' || choice == 'scissors' && botChoice == 'rock') {
        console.log('you lOOOoooOOoose')
    } else if (choice == botChoice) {
        console.log('tieteiteititsahjdfhkal;sdfjkls;afjdkls;aeiet')        
    } else {
        console.log('WIN ying success great')
    }
}

function timesPlayed(playerInput) {
    playerInput.forEach(choice => checkWin(choice))

    // for (let i = 0; i<playerInput.length; i++)
    // checkWin(playerInput[i])

}

timesPlayed(['rock', 'paper', 'paper'])