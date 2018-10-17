const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const NidoranMale = require('./NidoranMale');

function Nidorino(nickname, nidoran) {
    evolutionHelper({ pokemon: nidoran, super: NidoranMale, base: this });
    this.name = "Nidorino";
    this.nickname = nickname || "";
    this.hp = 61;
    this.attack = 72;
    this.defense = 57;
    this.spAttack = 55;
    this.spDefense = 55;
    this.speed = 65;
}

module.exports = protoInheritance({ base: Nidorino, super: NidoranMale });
