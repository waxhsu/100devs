// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let whatever = [5,2,3,4,5]

function lolok1() {
    if (whatever[0] < whatever[whatever.length-1]){
        console.log('hi')
    } else if (whatever[0] > whatever[whatever.length-1]) {
        console.log('bye')
    } else if (whatever[0] = whatever[whatever.length-1]){
        console.log('we close in an hour')
    }
}


lolok1(whatever)






function lolok2(arr){
    if (arr[0] < arr[arr.length-1]){
        console.log('hi')
    } else if (arr[0] > arr[arr.length-1]) {
        console.log('bye')
    } else if (arr[0] = arr[arr.length-1]){
        console.log('we close in an hour')
    }
}

lolok2([1,2,3,0])
