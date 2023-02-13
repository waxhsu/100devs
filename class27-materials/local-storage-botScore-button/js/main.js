//Create a button that adds 1 to a botScore stored in localStorage 


if (!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0) // set 0, will reset if its in function
}

document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)
}
 
