const Pokemon = require('./Pokemon'),
      types = require('../types'),
      evolutionHelper = require('../util/evolutionHelper');

const Bulbasaur = require('./Bulbasaur');

function Ivysaur(nickname, bulbasaur) {
    const pokemon = evolutionHelper({ pokemon: bulbasaur, _constructor: Bulbasaur });
    Object.assign(this, pokemon || new Bulbasaur);
    
    this.name = 'Ivysaur';
    this.nickname = nickname || '';
    this.hp = 60;
    this.attack = 62;
    this.defense = 63;
    this.spAttack = 80;
    this.spDefense = 80;
    this.speed = 60;
}
Ivysaur.prototype = Object.create(Bulbasaur.prototype);
Ivysaur.prototype.constructor = Ivysaur;

module.exports = Ivysaur;
