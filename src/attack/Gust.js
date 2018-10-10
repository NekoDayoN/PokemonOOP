const Attack = require('./Attack'),
      types = require('../types'),
      categories = require('./categories');

function Gust() {
    Attack.call(this, "Gust");
    this.type = types.flying;
    this.category = categories.special;
    this.power = 40;
    this.accuracy = 1.0;
    this.pp = 35;
    this.description = "Strikes the foe with a gust of wind whipped up by wings.";
}
Gust.prototype = Object.create(Attack.prototype);
Gust.prototype.constructor = Gust;

module.exports = Gust;
