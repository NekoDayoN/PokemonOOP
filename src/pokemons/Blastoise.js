const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Wartortle = require('./Wartortle');

function Blastoise(nickname, wartortle) {
    evolutionHelper({ pokemon: wartortle, super: Wartortle, base: this });
    this.name = "Blastoise";
    this.nickname = nickname || "";
    this.hp = 79;
    this.attack = 83;
    this.spAttack = 85;
    this.spDefense = 105;
    this.speed = 78;
}

module.exports = protoInheritance({ base: Blastoise, super: Wartortle });
