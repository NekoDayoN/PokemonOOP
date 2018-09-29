const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks');

const { Tackle, TailWhip } = attacks;

function Rattata(nickname) {
    Pokemon.call(this, nickname || "Rattata");
    this.types = [ types.normal ];
    this.attacks = [ new Tackle, new TailWhip ];
    this.level = 1;
    this.hp = 30;
    this.attack = 56;
    this.defense = 35;
    this.spAttack = 25;
    this.spDefense = 35;
    this.speed = 72;
}

Rattata.prototype = Object.create(Pokemon.prototype);

module.exports = Rattata;
