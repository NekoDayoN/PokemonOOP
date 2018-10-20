const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Growlithe = require('./Growlithe');

function Arcanine(nickname, growlithe) {
    evolutionHelper({ pokemon: growlithe, super: Growlithe, base: this });
    this.name = "Arcanine";
    this.nickname = nickname || "";
    this.hp = 90;
    this.attack = 110;
    this.defense = 80;
    this.spAttack = 100;
    this.spDefense = 80;
    this.speed = 95;
}

module.exports = protoInheritance({ base: Arcanine, super: Growlithe });
