const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Digglet = require('./Diglett');

function Dugtrio(nickname, digglet) {
    evolutionHelper({ pokemon: digglet, super: Digglet, base: this });
    this.name = "Dugtrio";
    this.nickname = nickname || "";
    this.hp = 35;
    this.attack = 100;
    this.defense = 50;
    this.spAttack = 50;
    this.spDefense = 50;
    this.speed = 120;
}

module.exports = protoInheritance({ base: Dugtrio, super: Digglet });
