const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Zubat = require('./Zubat');

function Golbat(nickname, zubat) {
    evolutionHelper({ pokemon: zubat, super: Zubat, base: this });
    this.name = "Golbat";
    this.nickname = nickname || "";
    this.hp = 75;
    this.defense = 80;
    this.spAttack = 65;
    this.spDefense = 75;
    this.speed = 90;
}

module.exports = protoInheritance({ base: Golbat, super: Zubat });
