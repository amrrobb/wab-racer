class Racer {
    constructor(name, speed, mileage = 0, booster = null){
        this.name = name
        this.speed = speed
        this.mileage = mileage
        this._booster = booster
    }

    get booster(){
        return this._booster
    }
    set booster(input){
        this._booster = input
    }
    boosting(currentTime){
        if (currentTime === this.booster.timer.readyTime){
            this.speed += this.booster.boostValue
            this.booster.isActive = true
        }
        if (this.booster.timer.useLimit !== 0){
            this.booster.timer.useLimit--
        }
        if (this.booster.timer.useLimit === 0){
            this.speed -= this.booster.boostValue
            this.booster.isActive = false
        }
    }
}

// Composition to Booster
class Timer {
    constructor(useLimit, readyTime){
        this.useLimit = useLimit
        this.readyTime = readyTime
    }
}

// Aggregation to Racer
class Booster {
    constructor(code, name, useLimit, readyTime, boostValue, isActive = false){
        this.code =  code 
        this.name =  name 
        this.timer =  new Timer(useLimit, readyTime) 
        this.boostValue =  boostValue 
        this.isActive =  isActive
    }
}

class Rocket extends Booster{
    constructor() {
        super("RC-1", "Rocket", 2, 3, 50)
    }
}

class JumpPeer extends Booster{
    constructor() {
        super("JP-1", "JumpPeer", 1, 1, 15)
    }
}

class Wing extends Booster{
    constructor() {
        super("WG-1", "Wing", 20, 1, 5)
        this.totalWing = 2
    }
}

module.exports = {
    Racer, Rocket, JumpPeer, Wing
}

