const { addBooster } = require("../model/model.js")
const Model = require("../model/model.js")
const View = require("../view/view.js")

class Controller{
    static notCommand(){
        View.showNotCommand()
    }

    static controlRules(){
        View.showRules()
    }

    static controlApply(name, speed){
        let apply = Model.applyRacer(name, speed)
        let count = Model.readRacer().length
        View.showApply(apply, count)
    }

    static controlBooster(name, equip) {
        let status = addBooster(name, equip)
        View.showBooster(name, equip, status)
    }

    static controlStart(times){

    }


}

module.exports = Controller