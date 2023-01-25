// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').onmouseenter = andiNext
// document.querySelector('#claireNext').addEventListener('mouseover', claireNext)
// document.querySelector('#sharleenNext').addEventListener('mouseover', sharleenNext)

// function andiNext(){
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }

// function claireNext(){
// 	andi.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext(){
// 	claire.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }



document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)


const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

function andiNext () {
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
}
function claireNext () {
	claire.classList.toggle('hidden')
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
}
function sharleenNext () {
	sharleen.classList.toggle('hidden')
	claire.classList.add('hidden')
	andi.classList.add('hidden')
}