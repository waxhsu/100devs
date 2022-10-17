/** 
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
**/

document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
    if(day === "monday"){
      document.querySelector('#placeToSee').innerText = ('esta lunes')
    }
    else if(day === "tuesday"){
      document.querySelector('#placetoSee').innerText = ('martes, bro')
    }
    else if(day === "wednesday"){
      document.querySelector('#placetoSee').innerText = ('miercoles, bruh')
    }
    else if(day === "thursday" || day === "friday"){
      document.querySelector('#placetoSee').innerText = ('chillchill, bro')
    }
    else if(day === "saturday" || day === "sunday"){
      document.querySelector('#placetoSee').innerText = ('el fin de semana, man')
    }
    else {
      document.querySelector('#placeToSee').innerText = ('spel corretly u stupd')
    }
}













