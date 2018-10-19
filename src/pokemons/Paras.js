const Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance'),
      types = require('../types');

const { Scratch } = attacks;      

function Paras(nickname) {
    Pokemon.call(this, "Paras");
    this.nickname = nickname || "";
    this.types = [ types.bug, types.grass ];
    this.attacks = [ new Scratch ];
    this.level = 1;
    this.hp = 35;
    this.attack = 70;
    this.defense = 55;
    this.spAttack = 45;
    this.spDefense = 55;
    this.speed = 25;
}

module.exports = protoInheritance({ base: Paras, super: Pokemon });
