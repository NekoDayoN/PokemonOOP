const categories = require('./categories'),
      types = require('../types'),
      Attack = require('./Attack');

function Scratch() {
    Attack.call(this, "Scratch");
    this.type = types.normal;
    this.category = categories.physical;
    this.power = 40;
    this.accuracy = 1.0;
    this.pp = 35;
    this.description = "Hard, pointed, and sharp claws rake the foe.";
}

Scratch.prototype = Object.create(Attack.prototype);
Scratch.prototype.constructor = Scratch;

module.exports = Scratch;
