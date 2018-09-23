const categories = require('./categories');
const Attack = require('./Attack');
const types = require('../types');

function ThunderShock() {
    Attack.call(this, "Thunder Shock");
    this.type = types.eletric;
    this.category = categories.special;
    this.power = 40;
    this.accuracy = 1.0;
    this.pp = 30;
    this.description = "An electric shock attack that may also leave the foe paralyzed.";
}

ThunderShock.prototype = Object.create(Attack.prototype);

module.exports = ThunderShock;
