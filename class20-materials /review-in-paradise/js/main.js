// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = 'thing'
favFood = 'rice'
console.log(favFood)


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let favSent = 'eyebrows so thin'
console.log(favSent[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

product1 = (a,s,d) => console.log(a/s*d)

product1(4,2,10)

function product2 (a,s,d){
    console.log(a/s*d)
}

product1(4,2,10)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

cubeRoot1 = (a) => console.log(a**a)

cubeRoot1(2)

function cubeRoot2 (a){
    console.log(a**a)
}
cubeRoot2(2)


function cubeRoot3(a){
    console.log(Math.cbrt(a).toFixed(4))
}

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"


function season1 (month){
    if (month === 'may' || month === 'june' || month === 'july' || month === 'august'){
        console.log('YAY')
    } else if (month === 'september' || month === 'october' || month === 'november' || month === 'december'){
        console.log('Booo')
    } else {
        console.log('enter a month')
    }
}


season1('december')
season1('june')


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFive (a){
    for (let i=0; i<=a; i++){
        if(i % 5 !== 0){
            console.log(a)
        }
    }
}

skipFive(10)

