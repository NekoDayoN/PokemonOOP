const categories = require('./categories');
const types = require('../types');
const Attack = require('./Attack');

function Leer() {
    Attack.call(this, "Leer");
    this.type = types.normal;
    this.category = categories.status;
    this.power = 0;
    this.accuracy = 1.0;
    this.pp = 30;
    this.description = "The foe is given an intimidating look that lowers its DEFENSE stat.";
}

Leer.prototype = Object.create(Attack.prototype);
Leer.prototype._attack = function(pokemon) {}

module.exports = Leer;
