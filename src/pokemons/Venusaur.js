const types = require('../types'),
      evolutionHelper = require('../util/evolutionHelper');

const Ivysaur = require('./Ivysaur');

function Venusaur(nickname, ivysaur) {
    const pokemon = evolutionHelper({ pokemon: ivysaur, _constructor: Ivysaur });
    Object.assign(this, pokemon || new Ivysaur);

    this.name = 'Venusaur';
    this.nickname = nickname || '';
    this.hp = 80;
    this.attack = 82;
    this.defense = 83;
    this.spAttack = 100;
    this.spDefense = 100;
    this.speed = 80;
}

Venusaur.prototype = Object.create(Ivysaur.prototype);
Venusaur.prototype.constructor = Venusaur;

module.exports = Venusaur;
