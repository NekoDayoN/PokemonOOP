const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { Ember } = attacks;

function Vulpix(nickname) {
    Pokemon.call(this, "Vulpix");
    this.types = [ types.fire ];
    this.attacks = [ new Ember ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 38;
    this.attack = 41;
    this.defense = 40;
    this.spAttack = 50;
    this.spDefense = 65;
    this.speed = 65;
}

module.exports = protoInheritance({ base: Vulpix, super: Pokemon });
