const Pokemon = require('./Pokemon'),
      types = require('../types'),
      evolutionHelper = require('../util/evolutionHelper'),
      nicknameChecker = require('../util/nicknameChecker');

const Ivysaur = require('./Ivysaur');

function Venusaur(nickname, ivysaur) {
    const pokemon = evolutionHelper({ pokemon: ivysaur, _constructor: Ivysaur });

    Object.assign(this, pokemon || new Ivysaur);

    this.name = nicknameChecker({
        pokemon: ivysaur,
        className: {
            new: 'Venusaur',
            old: 'Ivysaur'
        }
    });

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
