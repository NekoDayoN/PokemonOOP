const Attack = require('./Attack'),
      categories = require('./categories'),
      types = require('../types');

function Absorb() {
    Attack.call(this, "Absorb");
    this.type = types.grass;
    this.category = categories.special;
    this.power = 20;
    this.accuracy = 1.0;
    this.pp = 25;
    this.description = "An attack that absorbs half the damage it inflicted to restore HP.";
}

Absorb.prototype = Object.create(Attack.prototype);
Absorb.prototype.constructor = Absorb;

module.exports = Absorb;