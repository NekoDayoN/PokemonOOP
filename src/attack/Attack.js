const types = require('../types'),
      categories = require('./categories');

function Attack(name) {
    this.name = name || "";
    this.power = 0;
    this.accuracy = 0;
    this.pp = 0;
    this.description = "";
    this.category = categories.undefined;
    this.type = types.undefined;
}

Attack.prototype._attack = function(pokemon) { }
Attack.prototype.attack = function(pokemon) {
    this._attack(pokemon);
}

module.exports = Attack;
