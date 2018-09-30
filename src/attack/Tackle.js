const types = require('../types'),
      categories = require('./categories'),
      Attack = require('./Attack');

function Tackle() {
    Attack.call(this, "Tackle");
    this.power = 40;
    this.accuracy = 1.0;
    this.pp = 35;
    this.type = types.normal;
    this.category = categories.physical;
    this.description = "Inflicts regular damage.";
}

Tackle.prototype = Object.create(Attack.prototype);
Tackle.prototype.constructor = Tackle;

module.exports = Tackle;
