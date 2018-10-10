const Attack = require('./Attack'),
      types = require('../types'),
      categories = require('./categories');

function FuryAttack() {
    Attack.call(this, "Fury Attack");
    this.type = types.normal;
    this.category = categories.physical;
    this.power = 15;
    this.accuracy = .85;
    this.pp = 20;
    this.description = "The foe is jabbed repeatedly with a horn or beak two to five times.";
}
FuryAttack.prototype = Object.create(Attack.prototype);
FuryAttack.prototype.constructor = FuryAttack;

module.exports = FuryAttack;
