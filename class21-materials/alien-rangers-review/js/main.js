//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let smashChars = ['Isabelle', 'Donkey Kong', 'Terry Bogard', 'Dark Samus', 'Captain Falcon', 'Mii Brawler']

/* for (let i = 0; i<smashChars.length; i++)
    console.log(smashChars[i])
 */

smashChars.forEach (fighter => console.log(fighter))


//Create and array of numbers
let nums = [69, 420, 99, 44, 848]
//Return a new array of numbers that includes every even number from the previous Arrays

let onlyEvens = arr => arr.filter(n => n % 2 === 0)

console.log(onlyEvens(nums))



//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number


//.sort ((a,b) => a-b) is super easy way to sort things

function sumSecondLowAndHigh(arr) {
    let sorted = arr.sort((a,b) => a-b)
    console.log(sorted[1] + sorted[sorted.length-2])
}

sumSecondLowAndHigh([2,4,5,1,4])