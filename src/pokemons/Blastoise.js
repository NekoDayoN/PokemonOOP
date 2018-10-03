const types = require('../types'),
      evolutionHelper = require('../util/evolutionHelper');

const Wartortle = require('./Wartortle');

function Blastoise(nickname, wartortle) {
    const pokemon = evolutionHelper({ pokemon: wartortle, _constructor: Wartortle });

    Object.assign(this, pokemon || new Wartortle);
    this.name = "Blastoise";
    this.nickname = nickname || "";
    this.hp = 79;
    this.attack = 83;
    this.spAttack = 85;
    this.spDefense = 105;
    this.speed = 78;
}
Blastoise.prototype = Object.create(Wartortle.prototype);
Blastoise.prototype.constructor = Blastoise;

module.exports = Blastoise;
