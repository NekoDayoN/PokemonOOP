const types = require('../types');

function Attack() {
    this.name = "";
    this.power = 0;
    this.accuracy = 0;
    this.pp = 0;
    this.description = "";
    this.type = types.undefined;
}

Attack.prototype._attack = function(pokemon) { }
Attack.prototype.attack = function(pokemon) {
    this._attack(pokemon);
}

module.exports = Attack;