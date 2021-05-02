const racer = require("../model/racer.js")

const {Racer, Rocket, JumpPeer, Wing} = racer
let racersJSON = ("./racers.json")
const fs = require('fs')

class Model {
    static readRacer(){
        return JSON.parse(fs.readFileSync(racersJSON, 'utf-8'))
    }

    static applyRacer(name, speed){
        let data = this.readRacer()
        let instance = new Racer(name, speed)
        
        data.unshift(instance)
        data = JSON.stringify(data, null, 2)
        fs.writeFileSync(racersJSON, data)

        return instance
    }

    static addBooster (name, equip) {
        let data = this.readRacer()
        let i = this.findRacer(name, data)
        if (i === 'err') {
            return 'errname'
        }

        let equipped = this.checkBooster(equip, data)
        if (equipped){
            return 'equipped'
        } else {
            const instance
            if (equip === 'RC-1'){
                instance = new Rocket()
            } else if (equip === 'JP-1'){
                instance = new JumpPeer()
            } else if (equip === 'WG-1'){
                instance = new Wing ()
            } else {
                return 'errboost'
            }
        }

        data[i] = new Racer (name, data[i].speed, data[i].mileage, instance)
        data = JSON.stringify(data, null, 2)
        fs.writeFileSync(racersJSON, data)

        return data[i]

    }

    static checkBooster(equip, data){
        for( let i = 0; i < data.length; i++){
            let booster = data[i].booster
            if (booster !== undefined){
                if (booster.code === equip) {
                    return true
                }
            }
        }
        return false
    }

    static findRacer(name, data){
        for (let i = 0; i < data.length; i++){
            if (data[i].name === name){
                return i
            }
        }
        return 'err'
    }

}

module.exports = Model