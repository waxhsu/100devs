// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide(){
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }






// document.querySelector('#finalRose').addEventListener('click', hideOthers)

// function hideOthers () {
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }

//only have Nikki



document.querySelector('#finalRose').addEventListener('click', hideLosers)

function hideLosers() {
	document.querySelector('#nikki').style.display = 'none'
	document.querySelector('#claire').style.display = 'none'

}