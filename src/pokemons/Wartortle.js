const evolutionHelper = require('../util/evolutionHelper');

const Squirtle = require('./Squirtle'),
      { WaterGun } = require('../attack/attacks');

function Wartortle(nickname, squirtle) {
    const pokemon = evolutionHelper({ pokemon: squirtle, _constructor: Squirtle });

    Object.assign(this, pokemon || new Squirtle);
    this.name = 'Wartortle';
    this.nickname = nickname || '';
    this.hp = 59;
    this.attack = 63;
    this.defense = 80;
    this.spAttack = 65;
    this.spDefense = 80;
    this.speed = 58;
    this.attacks.push(new WaterGun);
}
Wartortle.prototype = Object.create(Squirtle.prototype);
Wartortle.prototype.constructor = Wartortle;

module.exports = Wartortle;
