/* //1 Create an array of movie titles. Loop through the array and each element to the h2.

movies = ['movie1', 'movie2', 'movie3']
for (let i=0; i<movies.length; i++){
    document.querySelector('h2').innerText += movies[i]
}


//2 Create an array of numbers. Loop through the array and add three to each number and replace the old number.

//MY SOLUTION
nums1 = [10,20,30,40]

nums1 [0] = nums1 [0] + 3
nums1 [1] = nums1 [1] + 3
nums1 [2] = nums1 [2] + 3
nums1 [3] = nums1 [3] + 3

//BETTER SOLUTION
nums2 = [10,20,30,40]

nums2.forEach((item, index) => {
    nums2[index] = item + 3
})

//3 Find the average of all the numbers from question two

let sum = 0

//MY SOLUTION
for(let i= 0; i <nums2.length; i++){
    sum += nums2[i]
}

//BETTER SOLUTION
nums2.forEach((number) => sum += number)

console.log(sum/nums2.length) */



/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////


//1 Create an array of movie titles. Loop through the array and each element to the h2.

movies = [' movie1', ' movie2', ' movie3']

/* for (let i=0; i<movies.length; i++){
    document.querySelector('h2').innerText += movies[i]
} */

let thisIsBasicallySum = document.querySelector('h2')

movies.forEach((item) => {
    thisIsBasicallySum.innerText += item
})

//2 Create an array of numbers. Loop through the array and add three to each number and replace the old number.

nums = [10,20,30,40]

nums.forEach((item, index) => {
    nums[index] = item + 3
})

console.log(nums)

//3 Find the average of all the numbers from question two

let sum = 0

nums.forEach((item) => sum += item)
console.log(sum/nums.length)

