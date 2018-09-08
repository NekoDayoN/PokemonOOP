const types = require('../types');
const Attack = require('./Attack');

function Tackle() {
    Attack.call(this);
    this.name = "Tackle";
    this.power = 50;
    this.accuracy = 1.0;
    this.pp = 35;
    this.type = types.normal;
    this.description = "Inflicts regular damage.";
}

Tackle.prototype = Object.create(Attack.prototype);
Tackle.prototype._attack = function(pokemon) {
    pokemon.hp -= (pokemon.defense - this.power);
}

module.exports = Tackle;