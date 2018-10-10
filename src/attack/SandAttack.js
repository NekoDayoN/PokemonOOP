const Attack = require('./Attack'),
      types = require('../types'),
      categories = require('./categories');

function SandAttack() {
    Attack.call(this, "Sand Attack");
    this.type = types.ground;
    this.category = categories.status;
    this.power = 0;
    this.accuracy = 1.0;
    this.pp = 15;
    this.description = "A lot of sand is hurled in the foe’s face, reducing its accuracy.";
}
SandAttack.prototype = Object.create(Attack.prototype);
SandAttack.prototype.constructor = SandAttack;

module.exports = SandAttack;
