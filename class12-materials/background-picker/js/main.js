document.getElementById('purple').mouseenter = partyPurple
document.getElementByID('green').mouseenter = partyGreen

function partyPurple (){
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen(partyPurple) {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

//purple rgba(241,63,247,1)
//green rgba(0,253,81,1)
//blue rgba(0,254,255);
//grey rgba(50,50,50);