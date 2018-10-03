const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks');

const { Leer, Wrap } = attacks;

function Ekans(nickname) {
    Pokemon.call(this, "Ekans");
    this.hp = 35;
    this.types = [ types.poison ];
    this.attacks = [ new Leer, new Wrap ];
    this.nickname = nickname || '';
    this.level = 1;
    this.attack = 60;
    this.defense = 44;
    this.speed = 55;
    this.spAttack = 40;
    this.spDefense = 54;
    this.defense = 55;
}

Ekans.prototype = Object.create(Pokemon.prototype);
Ekans.prototype.constructor = Ekans;

module.exports = Ekans;
