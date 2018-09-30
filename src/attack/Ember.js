const categories = require('./categories'),
      Attack = require('./Attack'),
      types = require('../types');

function Ember() {
    Attack.call(this, "Ember");
    this.type = types.fire;
    this.category = categories.special;
    this.power = 40;
    this.accuracy = 1.0;
    this.pp = 25;
    this.description = 'The foe is attacked with small flames. The foe may suffer a burn.';
}

Ember.prototype = Object.create(Attack.prototype);
Ember.prototype.constructor = Ember;

module.exports = Ember;