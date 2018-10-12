const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Kakuna = require('./Kakuna'),
    { FuryAttack } = require('../attack/attacks');

function Beedrill(nickname, kakuna) {
    evolutionHelper({ pokemon: kakuna, super: Kakuna, base: this });
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

module.exports = protoInheritance({ base: Beedrill, super: Kakuna });
