const types = require('../types'),
      Attack = require('./Attack'),
      categories = require('./categories');

function Harden() {
    Attack.call(this, "Harden");
    this.type = types.normal;
    this.category = categories.status;
    this.power = 0;
    this.accuracy = 0;
    this.pp = 30;
    this.description = 'The user stiffens all the muscles in its body to raise its DEFENSE stat.';
}
Harden.prototype = Object.create(Attack.prototype);
Harden.prototype.constructor = Harden;

module.exports = Harden;
