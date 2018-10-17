const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance'),
      types = require('../types');

const Nidorino = require('./Nidorino');

function Nidoking(nickname, nidorino) {
    evolutionHelper({ pokemon: nidorino, super: Nidorino, base: this });
    this.name = "Nidoking";
    this.nickname = nickname || "";
    this.hp = 81;
    this.attack = 102;
    this.defense = 77;
    this.spAttack = 85;
    this.spDefense = 75;
    this.speed = 85;
    this.types.push( types.ground );
}

module.exports = protoInheritance({ base: Nidoking, super: Nidorino });
