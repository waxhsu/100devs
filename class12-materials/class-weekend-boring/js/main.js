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

// document.querySelector('#check').addEventListener('click', check)

// function check() {
//   const day = document.querySelector('#day').value.toLowerCase()
//     if(day === "monday"){
//       document.querySelector('#placeToSee').innerText = ('esta lunes')
//     }
//     else if(day === "tuesday"){
//       document.querySelector('#placeToSee').innerText = ('martes, bro')
//     }
//     else if(day === "wednesday"){
//       document.querySelector('#placeToSee').innerText = ('miercoles, bruh')
//     }
//     else if(day === "thursday" || day === "friday"){
//       document.querySelector('#placeToSee').innerText = ('chillchill, bro')
//     }
//     else if(day === "saturday" || day === "sunday"){
//       document.querySelector('#placeToSee').innerText = ('el fin de semana, man')
//     }
//     else {
//       document.querySelector('#placeToSee').innerText = ('spel corretly u stupd')
//     }
// }

