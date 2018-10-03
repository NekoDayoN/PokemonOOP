const Attack = require('./Attack'),
      types = require('../types'),
      categories = require('./categories');

function WaterGun() {
    Attack.call(this, "Water Gun");
    this.type = types.water;
    this.category = categories.special;
    this.power = 40;
    this.accuracy = 100;
    this.pp = 25;
    this.description = "The foe is struck with a lot of water expelled forcibly from the mouth.";
}
WaterGun.prototype = Object.create(Attack.prototype);
WaterGun.prototype.constructor = WaterGun;

module.exports = WaterGun;
