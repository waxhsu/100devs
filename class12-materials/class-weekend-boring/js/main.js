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

// document.querySelector('#check').addEventListener('click', check)

// function check() {
//   const day = document.querySelector('#day').value.toLowerCase() 
//     if (day === 'monday' || day === 'tuesday') {
      // document.querySelector('#placeToSee').innerText = 'monday and tuesday are goldrenrod'
      // document.querySelector('body').style.backgroundColor = 'goldenrod'
      // document.querySelector('#placeToSee').style.color = 'white'
      // document.querySelector('body').style.color = 'white'
//   } else if (day === 'friday' || day ==='sunday') {
//       document.querySelector('#placeToSee').innerText = 'friday and sunday are grey'
//       document.querySelector('body').style.backgroundColor = 'grey'
//       document.querySelector('#placeToSee').style.color = 'yellow'
//       document.querySelector('body').style.color = 'goldenrod'
//   } else {
//       document.querySelector('#placeToSee').innerText = 'others are inverted'
//       document.querySelector('body').style.backgroundColor = 'red'
//       document.querySelector('#placeToSee').style.color = 'white'
//       document.querySelector('body').style.color = 'white'
//   }
// }



document.querySelector('#check').addEventListener('click', check)

function check () {
  const day = document.querySelector('#day').value.toLowerCase() 
  if (day === 'monday') {
    document.querySelector('#placeToSee').innerText = 'lunes'
    document.querySelector('body').style.backgroundColor = 'goldenrod'
    document.querySelector('h1').style.color = 'white'
    document.querySelector('#placeToSee').style.color = 'white'
    document.querySelector('label').style.color = 'white'
  } else if (day === 'tuesday' || day === 'friday') {
    document.querySelector('#placeToSee').innerText = '2 or 5'
    document.querySelector('body').style.backgroundColor = 'navy'
    document.querySelector('h1').style.color = 'white'
    document.querySelector('#placeToSee').style.color = 'white'
    document.querySelector('label').style.color = 'white'
  } else {
    document.querySelector('#placeToSee').innerText = 'red text'
  }
}



