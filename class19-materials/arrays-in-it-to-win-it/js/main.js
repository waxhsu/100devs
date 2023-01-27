//Create an array of movies with at least three movies.

movies = ['Avatar', 'Black Dynamite', 'Scary Movie']
console.log(movies)
//Using the array from above, store the first movie in a variable

let firstMovie = movies[0]
console.log(firstMovie)

//Get the length of the original array and store it in a new variable

let legs = movies.length
console.log(legs)

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastMovie = movies[2]
console.log(lastMovie)
//I would use .length to figure out the index and use that value -1

movies[3] = 'The Happening'

let lastLastMovie = movies[movies.length-1]
console.log(lastLastMovie)