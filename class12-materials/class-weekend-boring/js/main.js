document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

    if(day === "tuesday" || day === "thursday"){
      document.querySelector('#placeToSee').innerText = ('class day!')
    }else if(day === "saturday" || day === "sunday"){
      document.querySelector('#placeToSee').innerText = ('weekend')
    }else{
      document.querySelector('#placeToSee').innerText = ("so it's like friday, but like idk")
    }
    
  }
/**
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
// need value in celcius
    let temp = document.querySelector('#tempC').value
// convert from celcius to fahrenheit
    temp = temp * 9/5 + 32
// show value in fahrenheit
    document.querySelector('#tempF').innerText = temp

}
 */