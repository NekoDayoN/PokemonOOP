const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance'),
      types = require('../types');

const Nidorina = require('./Nidorina');

function Nidoqueen(nickname, nidorina) {
    evolutionHelper({ pokemon: nidorina, super: Nidorina, base: this });
    this.name = "Nidoqueen";
    this.nickname = nickname || "";
    this.types.push( types.ground );
    this.hp = 90;
    this.attack = 92;
    this.defense = 87;
    this.spAttack = 75;
    this.spDefense = 85;
    this.speed = 76;
}

module.exports = protoInheritance({ base: Nidoqueen, super: Nidorina });
