const Attack = require('./Attack'),
      types = require('../types'),
      categories = require('./categories');

function Confusion() {
    Attack.call(this, "Confusion");
    this.type = types.psychic;
    this.category = categories.special;
    this.power = 50;
    this.accuracy = 100;
    this.description = "A weak telekinetic attack that may also leave the foe confused.";
}
Confusion.prototype = Object.create(Attack.prototype);
Confusion.prototype.constructor = Confusion;

module.exports = Confusion;
