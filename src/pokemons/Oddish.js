const Pokemon = require('./Pokemon'),
      types = require('../types'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { Absorb, Growth } = attacks;

function Oddish(nickname) {
    Pokemon.call(this, "Oddish");
    this.types = [ types.poison, types.grass ];
    this.attacks = [ new Absorb, new Growth ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 45;
    this.attack = 50;
    this.defense = 55;
    this.spAttack = 75;
    this.spDefense = 65;
    this.speed = 30;
}

module.exports = protoInheritance({ base: Oddish, super: Pokemon });
