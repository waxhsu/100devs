//Create a mouse object that has four properties and three methods


let mouse1 = {}
    mouse1.brand = 'Logitech'
    mouse1.color = 'black'
    mouse1.mode = 'Wireless'
    mouse1.wireless = true

    mouse1.leftClick = function(){
        console.log('ESQUIERDA')
    }

    mouse1.rightClick = function(){
        console.log("DERECHA")
    }

    mouse1.scroll = function(){
        console.log('Elder Scrollllllll')
    }

let mouse2 = {}
    mouse2.brand = 'Apple'
    mouse2.color = 'white'
    mouse2.mode = 'Magic Trackpad 2'
    mouse2.wireless = true

    mouse2.leftClick = function(){
        console.log('ESQUIERDA')
    }

    mouse2.rightClick = function(){
        console.log("DERECHA")
    }

    mouse2.scroll = function(){
        console.log('Slide two fingers')
    }

//////////////////////////////////////////
//////////////////////////////////////////

function MakeMouse (mouseBrand, mouseColor,mouseMode, wireless){
    this.brand = mouseBrand
    this.color = mouseColor
    this.mode = mouseMode
    this.wirelessYN = wireless
    this.leftClick = function(){
        console.log('ESQUIERDA')
    }

    this.rightClick = function(){
        console.log("DERECHA")
    }

    this.scroll = function(){
        console.log('Slide two fingers')
    }
}



