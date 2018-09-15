const types = require('../types');
const Attack = require('./Attack');
const categories = require('./categories');

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
Peck.prototype._attack = function(pokemon) { }

module.exports = Peck;