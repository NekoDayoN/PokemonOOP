const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks');

const { Tackle, TailWhip } = attacks;

function Squirtle(nickname) {
    Pokemon.call(this, "Squirtle");
    this.types = [ types.water ];
    this.attacks = [ new Tackle, new TailWhip ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 44;
    this.attack = 48;
    this.defense = 65;
    this.spAttack = 50;
    this.spDefense = 64;
    this.speed = 43;
}

Squirtle.prototype = Object.create(Pokemon.prototype);
Squirtle.prototype.constructor = Squirtle;

module.exports = Squirtle;
