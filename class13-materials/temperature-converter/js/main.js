//Write your pseduo code first! 
// textbox with button
// input textbox
// math function in the input
// print.console log or something
// 
// need value in celcius
// convert from celcius to fahrenheit
// show value in fahrenheit
// 
// document.querySelector('#convert').addEventListener('click', convert)

// function convert() {
//     let temp = document.querySelector('#tempC').value
//     temp = temp * 9/5 + 32
//     document.querySelector('#tempF').innerText = temp
// }







document.querySelector('#convert').addEventListener('click', convert)

function convert () {
//get tempC value
    let temp = document.querySelector('#tempC').value
//math tempC to tempF
    temp = temp * 5/9 + 32
//display tempF
    document.querySelector('#tempF').innerText = temp
}

