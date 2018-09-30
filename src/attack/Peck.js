const types = require('../types'),
      Attack = require('./Attack'),
      categories = require('./categories');

function Peck() {
    Attack.call(this, "Peck");
    this.type = types.flying;
    this.category = categories.physical;
    this.description = "The foe is jabbed with a sharply pointed beak or horn.";
    this.power = 35;
    this.accuracy = 1.0;
    this.pp = 35;
}

Peck.prototype = Object.create(Peck.prototype);
Peck.prototype.constructor = Peck;

module.exports = Peck;
