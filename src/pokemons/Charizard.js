const types = require('../types'),
      evolutionHelper = require('../util/evolutionHelper');

const Charmeleon = require('./Charmeleon');

function Charizard(nickname, charmeleon) {
    const pokemon = evolutionHelper({ pokemon: charmeleon, _constructor: Charmeleon});

    Object.assign(this, pokemon || new Charmeleon);
    this.name = "Charizard";
    this.nickname = nickname || '';
    this.hp = 78;
    this.attack = 84;
    this.defense = 78;
    this.spAttack = 109;
    this.spDefense = 85;
    this.speed = 100;
}

Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;

module.exports = Charizard;
