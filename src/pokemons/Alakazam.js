const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Kadabra = require('./Kadabra');

function Alakazam(nickname, kadabra) {
    evolutionHelper({ pokemon: kadabra, super: Kadabra, base: this });
    this.name = "Alakazam";
    this.nickname = nickname || "";
    this.hp = 55;
    this.attack = 50;
    this.defense = 45;
    this.spAttack = 135;
    this.spDefense = 95;
    this.speed = 120;
}

module.exports = protoInheritance({ base: Alakazam, super: Kadabra });
