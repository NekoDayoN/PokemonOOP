const Pokemon = require('./Pokemon'),
      types = require('../types'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { Growl, Scratch } = attacks;

function Meowth(nickname) {
    this.name = "Meowth";
    this.nickname = nickname || "";
    this.level = 1;
    this.types = [ types.normal ];
    this.attacks = [ new Growl, new Scratch ];
    this.hp = 40;
    this.attack = 45;
    this.defense = 35;
    this.spAttack = 40;
    this.spDefense = 40;
    this.speed = 90;
}

module.exports = protoInheritance({ base: Meowth, super: Pokemon });
