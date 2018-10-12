const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Pikachu = require('./Pikachu');

function Raichu(nickname, raichu) {
    evolutionHelper({ pokemon: raichu, super: Pikachu, base: this });
    this.name = 'Raichu';
    this.nickname = nickname || "";
    this.hp = 60;
    this.defense = 55;
    this.spAttack = 90;
    this.spDefense = 80;
    this.speed = 110;
}

module.exports = protoInheritance({ base: Raichu, super: Pikachu });
