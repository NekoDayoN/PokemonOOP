const Pokemon = require('./Pokemon'),
      types = require('../types'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { SandAttack, Scratch } = attacks;

function Diglett(nickname) {
    this.name = "Digglet";
    this.level = 1;
    this.hp = 10;
    this.attack = 55;
    this.defense = 25;
    this.spAttack = 35;
    this.spDefense = 45;
    this.speed = 95;
    this.types = [ types.ground ];
    this.attacks = [ new SandAttack, new Scratch ];
}

module.exports = protoInheritance({ base: Diglett, super: Pokemon });
