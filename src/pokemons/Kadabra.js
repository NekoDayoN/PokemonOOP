const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Abra = require('./Abra');

function Kadabra(nickname, abra) {
    evolutionHelper({ pokemon: abra, super: Abra, base: this });
    this.name = "Kadabra";
    this.nickname = nickname || "";
    this.hp = 40;
    this.attack = 35;
    this.defense = 30;
    this.spAttack = 120;
    this.spDefense = 70;
    this.speed = 105;
}

module.exports = protoInheritance({ base: Kadabra, super: Abra });
