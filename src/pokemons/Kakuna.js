const evolutionHelper = require('../util/evolutionHelper');

const Weedle = require('./Weedle'),
    { Harden } = require('../attack/attacks');

function Kakuna(nickname, weedle) {
    const pokemon = evolutionHelper({ pokemon: weedle, _constructor: Weedle });

    Object.assign(this, pokemon || new Weedle);
    this.name = "Kakuna";
    this.nickname = nickname || "";
    this.hp = 45;
    this.attack = 25;
    this.defense = 50;
    this.spAttack = 25;
    this.spDefense = 25;
    this.speed = 35;
    this.attacks.push(new Harden);
}
Kakuna.prototype = Object.create(Weedle.prototype);
Kakuna.prototype.constructor = Kakuna;

module.exports = Kakuna;
