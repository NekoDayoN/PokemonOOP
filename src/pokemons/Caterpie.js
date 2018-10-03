const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks');

const { Tackle, StringShot } = attacks;

function Caterpie(nickname) {
    Pokemon.call(this, "Caterpie");
    this.types = [ types.bug ];
    this.attacks = [ new Tackle, new StringShot ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 45;
    this.attack = 30;
    this.defense = 35;
    this.spAttack = 20;
    this.spDefense = 20;
    this.speed = 45;
}

Caterpie.prototype = Object.create(Pokemon.prototype);
Caterpie.prototype.constructor = Caterpie;

module.exports = Caterpie;
