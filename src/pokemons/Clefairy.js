const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks');

const { Pound, Growl } = attacks;

function Clefairy(nickname) {
    Pokemon.call(this,  "Clefairy");
    this.types = [ types.fairy ];
    this.attacks = [ new Pound, new Growl ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 70;
    this.attack = 45;
    this.defense = 48;
    this.spAttack = 60;
    this.spDefense = 65;
    this.speed = 35;
}

Clefairy.prototype = Object.create(Pokemon.prototype);
Clefairy.prototype.constructor = Clefairy;

module.exports = Clefairy;