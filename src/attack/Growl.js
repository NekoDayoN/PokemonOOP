const types = require('../types');
const categories = require('./categories');
const Attack = require('./Attack');

function Growl() {
    Attack.call(this, "Growl");
    this.type = types.normal;
    this.power = 0;
    this.accuracy = 1.0;
    this.pp = 40;
    this.categories = categories.status;
    this.description = "Lowers the target's Attack by one stage.";
}

Growl.prototype = Object.create(Attack.prototype);
Growl.prototype._attack = function(pokemon) {
    
}

module.exports = Growl;