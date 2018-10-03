const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks');

const { Growl, Scratch } = attacks;

function Charmander(nickname) {
    Pokemon.call(this, 'Charmander');
    this.types = [ types.fire ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 39;
    this.attack = 52;
    this.defense = 43;
    this.spAttack = 60;
    this.spDefense = 50;
    this.speed = 65;
    this.attacks = [ new Growl, new Scratch ];
}

Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

module.exports = Charmander;
