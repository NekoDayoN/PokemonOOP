const types = require('../types'),
      categories = require('./categories'),
      Attack = require('./Attack');

function Growl() {
    Attack.call(this, "Growl");
    this.type = types.normal;
    this.category = categories.status;
    this.power = 0;
    this.accuracy = 1.0;
    this.pp = 40;
    this.description = "Lowers the target's Attack by one stage.";
}

Growl.prototype = Object.create(Attack.prototype);
Growl.prototype.constructor = Growl;

module.exports = Growl;
