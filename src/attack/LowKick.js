const Attack = require('./Attack'),
      types = require('../types'),
      categories = require('./categories');

function LowKick() {
    Attack.call(this, "Low Kick");
    this.type = types.fighting;
    this.category = categories.physical;
    this.power = 0;
    this.accuracy = 1;
    this.pp = 20;
    this.description = "A low, tripping kick that inflicts more damage on heavier foes.";
}

LowKick.prototype = Object.create(Attack.prototype);
LowKick.prototype.constructor = LowKick;

module.exports = LowKick;
