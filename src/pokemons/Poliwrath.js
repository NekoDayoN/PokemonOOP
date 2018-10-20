const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance'),
      types = require('../types');

const Poliwhirl = require('./Poliwhirl');

function Poliwrath(nickname, poliwhirl) {
    evolutionHelper({ pokemon: poliwhirl, super: Poliwhirl, base: this });
    this.types.push( types.fighting );
    this.name = "Poliwrath";
    this.nickname = nickname || "";
    this.hp = 90;
    this.attack = 95;
    this.defense = 95;
    this.spAttack = 70;
    this.spDefense = 90;
    this.speed = 70;
}

module.exports = protoInheritance({ base: Poliwrath, super: Poliwhirl });
