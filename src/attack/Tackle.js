const types = require('../types');
const categories = require('./categories');
const Attack = require('./Attack');

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
Tackle.prototype._attack = function(pokemon) {
    
}

module.exports = Tackle;