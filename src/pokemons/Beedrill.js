const evolutionHelper = require('../util/evolutionHelper');

const Kakuna = require('./Kakuna'),
    { FuryAttack } = require('../attack/attacks');

function Beedrill(nickname, kakuna) {
    const pokemon = evolutionHelper({ pokemon: kakuna, _constructor: Kakuna });

    Object.assign(this, pokemon || new Kakuna);
    this.name = "Beedrill";
    this.nickname = nickname || "";
    this.level = 1;
    this.hp = 65;
    this.attack = 60;
    this.defense = 40;
    this.spAttack = 45;
    this.spDefense = 80;
    this.speed = 75;
    this.attacks.push(new FuryAttack);
}
Beedrill.prototype = Object.create(Kakuna.prototype);
Beedrill.prototype.constructor = Beedrill;

module.exports = Beedrill;
