const categories = require('./categories');
const types = require('../types');
const Attack = require('../attack/Attack');

function StringShot() {
    Attack.call(this, "String Shot");
    this.category = categories.status;
    this.type = types.bug;
    this.power = 0;
    this.accuracy = .95;
    this.pp = 40;
}

StringShot.prototype = Object.create(Attack.prototype);
StringShot.prototype._attack = function() {

}

module.exports = StringShot;