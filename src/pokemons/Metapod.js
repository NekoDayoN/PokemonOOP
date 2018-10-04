const evolutionHelper = require('../util/evolutionHelper'),
      { Harden } = require('../attack/attacks');

const Caterpie = require('./Caterpie');

function Metapod(nickname, caterpie) {
    const pokemon = evolutionHelper({ pokemon: caterpie, _constructor: Caterpie });

    Object.assign(this, pokemon || new Caterpie);
    this.name = "Metapod";
    this.nickname = nickname || "";
    this.hp = 50;
    this.attack = 20;
    this.defense = 55;
    this.spAttack = 25;
    this.spDefense = 25;
    this.speed = 30;
    this.attacks.push(new Harden);
}
Metapod.prototype = Object.create(Caterpie.prototype);
Metapod.prototype.constructor = Metapod;

module.exports = Metapod;
