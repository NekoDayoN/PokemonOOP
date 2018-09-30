const categories = require('./categories'),
      types = require('../types'),
      Attack = require('./Attack');

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
Leer.prototype.constructor = Leer;

module.exports = Leer;
