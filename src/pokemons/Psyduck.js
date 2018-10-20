const Pokemon = require('./Pokemon'),
      types = require('../types'),
      protoInheritance = require('../util/protoInheritance');

const { Scratch } = require('../attack/attacks');

function Psyduck(nickname) {
    Pokemon.call(this, "Psyduck");
    this.name = "Psyduck";
    this.nickname = nickname || "";
    this.types = [ types.water ];
    this.attacks = [ new Scratch ];
    this.level = 1;
    this.hp = 50;
    this.attack = 52;
    this.defense = 48;
    this.spAttack = 65;
    this.spDefense = 50;
    this.speed = 55;
}

module.exports = protoInheritance({ base: Psyduck, super: Pokemon });
