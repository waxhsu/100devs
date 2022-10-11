document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

    if(day === "tuesday" || day === "thursday"){
      console.log('class day!')
    }else if(day === "satuday" || day === "sunday"){
      console.log('weekend')
    }else{
      console.log("so it's like friday, but like idk")
    }
  }

//make the alert show up on the page
//make input not case sensitive