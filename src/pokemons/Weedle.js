const Pokemon = require('./Pokemon'),
      types = require('../types'),
      attacks = require('../attack/attacks');

const { PoisonSting, StringShot } = attacks;

function Weedle(nickname) {
    Pokemon.call(this, nickname || "Weedle");
    this.types = [ types.bug, types.poison ];
    this.attacks = [ new PoisonSting, new StringShot ];
    this.level = 1;
    this.hp = 40;
    this.attack = 35;
    this.defense = 30;
    this.spAttack = 20;
    this.spDefense = 20;
    this.speed = 50;
}

Weedle.prototype = Object.create(Pokemon.prototype);
Weedle.prototype.constructor = Weedle;

module.exports = Weedle;
