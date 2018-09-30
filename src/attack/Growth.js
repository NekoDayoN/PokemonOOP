const Attack = require('./Attack'),
      types = require('../types'),
      categories = require('./categories');

function Growth() {
    Attack.call(this, "Growth");
    this.type = types.normal;
    this.category = categories.status;
    this.power = 0;
    this.accuracy = 0;
    this.pp = 40;
    this.description = "The user’s body is forced to grow, raising the SP. ATK stat.";
}

Growth.prototype = Object.create(Attack.prototype);

module.exports = Growth;