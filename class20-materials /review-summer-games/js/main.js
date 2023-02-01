//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// THIS IS ALSO CORRECT
function mul(arr) {
    let product = 1
    for(let i = 0; i < arr.length; i++){
        product *= arr[i]
        console.log(product)
    }
}

mul([10,2,3])


// OTHER SOLUTION
function multiNum(arr){
    let product = 1
    arr.forEach(num => product *= num)
    console.log(product)
}

multiNum([10,2,3])

// arr and num are parameters; therefore it does not need a declaration