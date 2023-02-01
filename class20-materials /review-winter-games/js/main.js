//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
// use map

/* function evenNums1(arr){
    let evens1 = arr.map(x => )
        if (arr[i] % 2 === 1){
                // run  modulus to detect odd numbers
    }
    console.log(arr)
}

evenNums1([2,3,4,5,6,7]) */



function evenNums2(nums){
    let evens = []

    nums.forEach(n => {
        if(n % 2 === 0){
            evens.push(n)
        }
    })
    console.log(evens)
}

evenNums2([2,3,4,5,6,7,8,9])