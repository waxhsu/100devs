//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed
    }
}




class MakeSmashChar {
    constructor(name, normalAtk){
        this.name = name
        this.atk = normalAtk
    }
    announcer(){
        console.log.toUpperCase((`${this.name}`))
    }
    punch(){
        console.log(`${this.atk} hehe haha lol`)
    }
}

class Series extends MakeSmashChar{
    constructor (name, normalAtk, series){
        super(name, normalAtk)
        this.series = series
    }
    origin(){
        console.log(`${this.name} is from ${this.series}`)
    }
}
