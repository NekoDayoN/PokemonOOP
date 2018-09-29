const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks');

const { Growl, Tackle } = attacks;

function Bulbasaur(nickname) {
    Pokemon.call(this, nickname || 'Bulbasaur');
    this.types = [ types.grass, types.poison ];
    this.attacks = [ new Growl, new Tackle ];
    this.hp = 45;
    this.level = 1;
    this.attack = 49;
    this.defense = 49;
    this.speed = 45;
    this.spAttack = 65;
    this.spDefense = 65;
}

Bulbasaur.prototype = Object.create(Pokemon.prototype);

module.exports = Bulbasaur;
