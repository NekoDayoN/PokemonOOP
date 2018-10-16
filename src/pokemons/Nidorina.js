const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const NidoranFemale = require('./NidoranFemale');

function Nidorina(nickname, nidoran) {
    evolutionHelper({ pokemon: nidoran, super: NidoranFemale, base: this });
    this.name = "Nidorina";
    this.nickname = nickname || "";
    this.hp = 70;
    this.attack = 62;
    this.defense = 67;
    this.spAttack = 55;
    this.spDefense = 55;
    this.speed = 56;
}

module.exports = protoInheritance({ base: Nidorina, super: NidoranFemale });
