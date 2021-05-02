class View {
    static showNotCommand(){
        console.log(`You can't proceed this COMMAND`);
    }

    static showRules() {
        console.log(`| --- Apply Racer   --- | node index.js race:apply <racer_name> <racer_speed>`);
        console.log(`| --- Equip Booster --- | node index.js race:equip <racer_name> <booster_code>`);
        console.log(`| --- Start Race    --- | node index.js race:sta>rt <times>`);
    }

    static showApply(apply, count){
        console.log(apply)
        console.log(`=============`);
        console.log(`${apply.name} standby on the circuit! Total racer(s) : ${count}`);
    }

    static showBooster(name, equip, booster){
        if (booster === 'errname'){
            console.log('Racer name not found');
        } else if (booster === 'errboost'){
            console.log('Booster not found');
        } else {
            console.log(booster);
            console.log(`=============`);
            let boost = ""
            if (equip ==== 'RC-1'){      
                boost = "Rocket"
            } else if (equip === 'JP-1'){
                boost = "JumpPeer"
            } else if (equip === 'WG-1'){
                boost = "Wing"
            }
            console.log(``);
        }
    }
}

module.exports = View