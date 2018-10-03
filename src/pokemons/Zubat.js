const Pokemon = require('./Pokemon'),
      types = require('../types');

const { Absorb } = require('../attack/attacks');

function Zubat(nickname) {
    Pokemon.call(this, "Zubat");
    this.types = [ types.poison, types.flying ];
    this.attacks = [ new Absorb ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 40;
    this.attack = 45;
    this.defense = 35;
    this.spAttack = 30;
    this.spDefense = 40;
    this.speed = 55;
}

Zubat.prototype = Object.create(Pokemon.prototype);
Zubat.prototype.constructor = Zubat;

module.exports = Zubat;
