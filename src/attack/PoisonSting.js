const categories = require('./categories');
const types = require('../types');
const Attack = require('./Attack');

function PoisonSting() {
    Attack.call(this, "Poison Sting");
    this.category = categories.physical;
    this.type = types.poison;
    this.power = 15;
    this.accuracy = 1.0;
    this.pp = 35;
}

PoisonSting.prototype = Object.create(Attack.prototype);
PoisonSting.prototype._attack = function() {}

module.exports = PoisonSting;
