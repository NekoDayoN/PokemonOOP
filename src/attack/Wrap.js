const categories = require('./categories'),
      types = require('../types'),
      Attack = require('./Attack');

function Wrap() {
    Attack.call(this, "Wrap");
    this.type = types.normal;
    this.category = categories.physical;
    this.power = 15;
    this.accuracy = .90;
    this.pp = 20;
    this.description = "A long body or vines are used to wrap the foe for two to five turns.";
}

Wrap.prototype = Object.create(Attack.prototype);
Wrap.prototype.constructor = Wrap;

module.exports = Wrap;
