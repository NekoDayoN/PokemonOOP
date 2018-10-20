const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Mankey = require('./Mankey');

function Primeape(nickname, mankey) {
    evolutionHelper({ pokemon: mankey, super: Mankey, base: this });
    this.name = "Primeape";
    this.nickname = nickname || "";
    this.hp = 65;
    this.attack = 105;
    this.defense = 60;
    this.spAttack = 60;
    this.spDefense = 70;
    this.speed = 95;
}

module.exports = protoInheritance({ base: Primeape, super: Mankey });
