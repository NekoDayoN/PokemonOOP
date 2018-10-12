const Pokemon = require('./Pokemon'),
      types = require('../types'),
      protoInheritance = require('../util/protoInheritance');

const { Absorb } = require('../attack/attacks');

function Zubat(nickname) {
    Pokemon.call(this, "Zubat");
    this.types = [ types.poison, types.flying ];
    this.attacks = [ new Absorb ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 40;
    this.attack = 45;
    this.defense = 35;
    this.spAttack = 30;
    this.spDefense = 40;
    this.speed = 55;
}

module.exports = protoInheritance({ base: Zubat, super: Pokemon });
