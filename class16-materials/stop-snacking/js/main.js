//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', stopplz)


function stopplz (){
    let num = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ""
    //this resets the DOM by replacing the results after output//
    for (i = 1; i <= num; i++){
        document.querySelector('#stops').innerText += " sToP"
    }
}