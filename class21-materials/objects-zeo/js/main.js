//Create a stopwatch object that has four properties and three methods

let stopwatch = {}
    stopwatch.currentMin = 3
    stopwatch.currentSec = 54
    stopwatch.color = 'black'
    stopwatch.brand = 'Nike'
    stopwatch.size = 'small'

    stopwatch.start = function(){
        console.log('Starting')
    }

    stopwatch.stop = function(){
        console.log('Stopping')
    }

    stopwatch.sayBrand = function(){
        console.log(stopwatch.brand)

    }




    //METHODS are properties that have a function
    //PROPERTIES are values that are tied to the object



    function headsOrTails ( ) {
        let result = Math.random ( )
        if (result < .5) {
            return 'heads'
        } else {
            return 'tails'
        }
    }

const headOrTails = _ => Math.random < .5  ? 'heads' : 'tails'




// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }