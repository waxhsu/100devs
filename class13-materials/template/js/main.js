

function math (num1, num2) {
for (let i = 1; i <= num2; i++) 
    if (num1 >= 2 && num2 <= 10) {
    console.log(`${num1} x ${i} = ${num1 * i}`);
    } else {
        console.log("Number must be between 2 and 9");
    break;
    }
}