const categories = require('./categories');
const Attack = require('./Attack');
const types = require('../types');

function Pound() {
    Attack.call(this, "Pound");
    this.type = types.normal;
    this.category = categories.physical;
    this.power = 40;
    this.accuracy = 1.0;
    this.pp = 35;
    this.description = "A physical attack delivered with a long tail or a foreleg, etc.";
}

Pound.prototype = Object.create(Attack.prototype);

module.exports = Pound;