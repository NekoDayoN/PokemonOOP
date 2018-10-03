const types = require('../types'),
      evolutionHelper = require('../util/evolutionHelper');

const Charmander = require('./Charmander'),
      { Ember } = require('../attack/attacks');

function Charmeleon(nickname, charmander) {
    const pokemon = evolutionHelper({ pokemon: charmander, _constructor: Charmander });

    Object.assign(this, pokemon || new Charmander);
    this.name = "Charmeleon";
    this.nickname = nickname || '';
    this.hp = 58;
    this.attack = 64;
    this.defense = 58;
    this.spAttack = 80;
    this.spDefense = 65;
    this.speed = 80;
    this.attacks.push(new Ember);
}

Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;

module.exports = Charmeleon;
