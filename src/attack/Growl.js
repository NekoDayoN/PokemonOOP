const types = require('../types');
const Attack = require('./Attack');

function Growl() {
    Attack.call(this);
    this.name = "Growl";
    this.type = types.normal;
    this.power = 0;
    this.accuracy = 1.0;
    this.pp = 40;
    this.description = "Lowers the target's Attack by one stage.";
}

Growl.prototype = Object.create(Attack.prototype);
Growl.prototype._attack = function(pokemon) {
    pokemon.attack--;
}

module.exports = Growl;