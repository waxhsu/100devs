//Create a dog object that has four properties and three methods



function Sk8r (skateboard, helmetBrand, helmetColor, style) {
    this.skateboard = skateboard
    this.helmetBrand = helmetBrand
    this.helmetColor = helmetColor
    this.sk8Style = style

    this.win = function() {
        console.log(`my style of ${style} is best style`)
    }

    this.lose = function() {
        console.log(`i lose because ${skateboard} was broke`)
    }

    this.salty = function() {
        console.log(`i know how to use excel spreadsheet with my ${this.helmetBrand}`)
    }
}



