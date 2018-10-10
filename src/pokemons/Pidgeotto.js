const evolutionHelper = require('../util/evolutionHelper');

const Pidgey = require('./Pidgey'),
    { Gust, SandAttack } = require('../attack/attacks');

function Pidgeotto(nickname, pidgey) {
    const pokemon = evolutionHelper({ pokemon: pidgey, _constructor: Pidgey });

    Object.assign(this, pokemon || new Pidgey);
    this.name = "Pidgeotto";
    this.nickname = nickname || "";
    this.level = 1;
    this.hp = 63;
    this.attack = 60;
    this.defense = 55;
    this.spAttack = 50;
    this.spDefense = 50;
    this.speed = 71;
    this.attacks.push(new Gust, new SandAttack);
}
Pidgeotto.prototype = Object.create(Pidgey.prototype);
Pidgeotto.prototype.constructor = Pidgeotto;

module.exports = Pidgeotto;
