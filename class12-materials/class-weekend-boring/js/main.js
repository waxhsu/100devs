document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"){
      alert('class day!')
    }else if(day === "Satuday" || day === "Sunday"){
      alert('weekend')
    }else{
      alert("so it's like friday, but like idk")
    }

    document.querySelector('#placeToSee').innerText = total
  }

//make the alert show up on the page
//make input not case sensitive