const Pokemon = require('./Pokemon'),
      types = require('../types'),
    { Ember } = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

function Growlithe(nickname) {
    Pokemon.call(this, "Growlithe");
    this.nickname = nickname || "";
    this.types = [ types.fire ];
    this.attacks = [ new Ember ];
    this.level = 1;
    this.hp = 55;
    this.attack = 70;
    this.defense = 45;
    this.spAttack = 70;
    this.spDefense = 50;
    this.speed = 60;
}

module.exports = protoInheritance({ base: Growlithe, super: Pokemon });
