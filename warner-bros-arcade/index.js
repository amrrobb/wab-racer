const Controller = require("./controller/controller.js")

const argv = process.argv
const command = argv[2]
const name = argv[3]
const times = Number(name)
const code = argv[4]
const speed = Number(code)

if (!command || command === 'race:rules'){
    Controller.controlRules()
} else if (command === 'race:apply'){
    if (name && !Number.isNaN(speed))
        Controller.controlApply(name, speed)
    else {
        Controller.notCommand()
    }
} else if (command === 'race:equip'){
    if (name && code)
        Controller.controlBooster(name, code)
    else {
        Controller.notCommand()
    }
} else if (command === "race:start" && !Number.isNaN(times)) {
    Controller.controlStart(times)
} else {
    Controller.notCommand()
}

// console.log("test");


