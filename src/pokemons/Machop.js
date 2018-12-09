const Pokemon = require('./Pokemon'),
      types = require('../types'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { Leer, LowKick } = attacks;

function Machop(nickname) {
    Pokemon.call(this, "Machop");
    this.nickname = nickname || "";
    this.types = [ types.fighting ];
    this.attacks = [ new Leer, new LowKick ];
    this.level = 1;
    this.hp = 70;
    this.attack = 80;
    this.defense = 50;
    this.spAttack = 35;
    this.spDefense = 35;
    this.speed = 35;
}

module.exports = protoInheritance({ base: Machop, super: Pokemon});
