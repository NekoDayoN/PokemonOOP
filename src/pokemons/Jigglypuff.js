const Pokemon = require('./Pokemon'),
      types = require('../types'),
      attacks = require('../attack/attacks');

const { DefenseCurl } = attacks;

function Jigglypuff(nickname) {
    Pokemon.call(this, nickname || "Jigglypuff");
    this.types = [ types.normal, types.fairy ];
    this.attacks = [ new DefenseCurl ];
    this.level = 1;
    this.hp = 115;
    this.attack = 45;
    this.defense = 20;
    this.spAttack = 45;
    this.spDefense = 25;
    this.speed = 20;
}

Jigglypuff.prototype = Object.create(Pokemon.prototype);

module.exports = Jigglypuff;