const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks');

const { Ember } = attacks;

function Vulpix(nickname) {
    Pokemon.call(this, nickname || "Vulpix");
    this.types = [ types.fire ];
    this.attacks = [ new Ember ];
    this.level = 1;
    this.hp = 38;
    this.attack = 41;
    this.defense = 40;
    this.spAttack = 50;
    this.spDefense = 65;
    this.speed = 65;
}

Vulpix.prototype = Object.create(Pokemon.prototype);
Vulpix.prototype.constructor = Vulpix;

module.exports = Vulpix;
