const Pokemon = require('./Pokemon'),
      types = require('../types'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { Teleport } = attacks;

function Abra(nickname) {
    Pokemon.call(this, "Abra");
    this.nickname = nickname || "";
    this.types = [ types.psychic ];
    this.attacks = [ new Teleport ];
    this.level = 1;
    this.hp = 25;
    this.attack = 20;
    this.defense = 15;
    this.spAttack = 105;
    this.spDefense = 55;
    this.speed = 90;
}

module.exports = protoInheritance({ base: Abra, super: Pokemon });
