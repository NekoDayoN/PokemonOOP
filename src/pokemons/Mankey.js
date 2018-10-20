const Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks'),
      types = require('../types'),
      protoInheritance = require('../util/protoInheritance');

const { Scratch, Leer } = attacks;

function Mankey(nickname) {
    Pokemon.call(this, "Mankey");
    this.nickname = nickname || "";
    this.types = [ types.fighting ];
    this.attacks = [ new Scratch, new Leer ];
    this.level = 1;
    this.hp = 40;
    this.attack = 80;
    this.defense = 35;
    this.spAttack = 35;
    this.spDefense = 45;
    this.speed = 70;
}

module.exports = protoInheritance({ base: Mankey, super: Pokemon });
