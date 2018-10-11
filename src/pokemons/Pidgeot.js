const evolutionHelper = require('../util/evolutionHelper');

const Pidgeotto = require('./Pidgeotto');

function Pidgeot(nickname, pidgeotto) {
    const pokemon = evolutionHelper({ pokemon: pidgeotto, _constructor: Pidgeotto });

    Object.assign(this, pokemon);
    this.name = "Pidgeot";
    this.nickname = nickname || "";
    this.level = 1;
    this.hp = 83;
    this.attack = 80;
    this.defense = 70;
    this.spAttack = 70;
    this.spDefense = 70;
    this.speed = 101;
}
Pidgeot.prototype = Object.create(Pidgeotto.prototype);
Pidgeot.prototype.constructor = Pidgeot;

module.exports = Pidgeot;
