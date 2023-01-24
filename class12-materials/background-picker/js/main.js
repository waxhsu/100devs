// document.getElementById('blue').onmouseenter = partyTeal
// document.getElementById('grey').onmouseenter = partyGrey

// function partyTeal() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'red'
// }

// function partyGrey() {
//   document.querySelector('body').style.backgroundColor = 'goldenrod'
//   document.querySelector('body').style.color = 'white'
// }

//purple rgba(241,63,247,1)
//green rgba(0,253,81,1)asdf
//blue rgba(0,254,255)
//grey rgba(50,50,50);

document.querySelector('#purple').onclick = partyPurple
document.querySelector('#green').onmouseenter = partyGreen

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'goldenrod'
    document.querySelector('body').style.color = 'white'
    document.querySelector('h2').innerText = 'I changed this text'
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'navy'
    document.querySelector('body').style.color = 'goldenrod'
    document.querySelector('h2').innerText = 'mouseenter change'
}

