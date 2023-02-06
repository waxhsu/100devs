//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


function MakeSmashCharacter (finalSmash, neutralB, upB, downB, sideB, catchPhrase) {
    this.neutralB = neutralB
    this.upB = upB
    this.downB = downB
    this.sideB = sideB
    this.finalSmash = finalSmash
    this.catchPhrase = catchPhrase
    
    this.taunt = function() {
        console.log(`HEY CMON CMON ${this.finalSmash}`)
    }
    this.winning = function() {
        console.log(`HEY ${this.catchPhrase}`)
    }
    this.dash = function() {
        console.log(`PUNK CHECK`)
    }
} 

let terryBogard = new MakeSmashCharacter('BUSTA WHOALF', 'POWA WAYV', 'RISING TAKO', 'POWA DAHHNK', 'BAHHN KNAKLE', 'R U OK?????')

let marioMario = new MakeSmashCharacter('WAHOOOOO', 'fireball', 'money maker', 'F.L.U.D.D.', 'cape', 'ITSA ME, MAAHRIO')
