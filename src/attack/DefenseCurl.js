const categories = require('./categories');
const types = require('../types');
const Attack = require('./Attack');

function DefenseCurl() {
    Attack.call(this, "Defense Curl");
    this.type = types.normal;
    this.category = categories.status;
    this.power = 0;
    this.accuracy = 0;
    this.pp = 40;
    this.description = "The user curls up to conceal weak spots and raise its DEFENSE stat.";
}

DefenseCurl.prototype = Object.create(Attack.prototype);
DefenseCurl.prototype._attack = function(pokemon) {}

module.exports = DefenseCurl;
