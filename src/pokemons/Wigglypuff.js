const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Jigglypuff = require('./Jigglypuff');

function Wigglypuff(nickname, jigglypuff) {
    evolutionHelper({ pokemon: jigglypuff, super: Jigglypuff, base: this });
    this.name = "Wigglytuff";
    this.nickname = nickname || "";
    this.hp = 140;
    this.attack = 70;
    this.defense = 45;
    this.spAttack = 85;
    this.spDefense = 50;
    this.speed = 45;
}

module.exports = protoInheritance({ base: Wigglypuff, super: Jigglypuff });
