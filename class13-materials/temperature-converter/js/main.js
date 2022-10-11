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
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
// need value in celcius
    let temp = document.querySelector('#tempC').value
// convert from celcius to fahrenheit
    temp = temp * 9/5 + 32
// show value in fahrenheit
    document.querySelector('#tempF').innerText = temp

}