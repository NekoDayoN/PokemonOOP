const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Psyduck = require('./Psyduck');

function Golduck(nickname, psyduck) {
    evolutionHelper({ pokemon: psyduck, super: Psyduck, base: this });
    this.name = "Golduck";
    this.nickname = nickname || "";
    this.hp = 80;
    this.attack = 82;
    this.defense = 78;
    this.spAttack = 95;
    this.spDefense = 80;
    this.speed = 85;
}

module.exports = protoInheritance({ base: Golduck, super: Psyduck });
