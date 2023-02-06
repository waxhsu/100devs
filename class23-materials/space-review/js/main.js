//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

newArr = [1,2,3,4]
let sum = 0
for (let i = 0; i < newArr.length; i++)
sum += newArr[i]
console.log(sum)

// LEON EXAMPLE
// let nums = [10,20,30,50]
// console.log(nums.reduce((acc, c ) => acc + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function takeArr (arr) {
    for (let i = 0; i < arr.length; i++)
    console.log (Math.pow(arr[i],arr[i]))
}
console.log(takeArr([1,2,3,4,5]))


//LEON EXAMPLE
// let newArr = nums => nums.map( num => num**2)

//Create a function that takes string
//Print the reverse of that string to the console

const str1 = 'RACECAR'
let newArr1 = str1.split('').reverse().join('')
console.log(newArr1)



function reverseStr (newArr1) {
    console.log(newArr1.toString())
}

// LEON EXAMPLE
let unoReverse = str => console.log(str.split('').reverse().join(''))


//Create a function that takes in a string
//Alert if the string is a palindrome or not

// can check if normal and reversed are the same


// const palindromeCheck = str => console.log(str === str.split('').reverse().join(''))
