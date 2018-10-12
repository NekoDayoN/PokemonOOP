const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Sandshrew = require('./Sandshrew');

function Sandslash(nickname, sandshrew) {
    evolutionHelper({ pokemon: sandshrew, super: Sandshrew, base: this });
    this.name = 'Sandslash';
    this.nickname = nickname || "";
    this.hp = 75;
    this.attack = 100;
    this.defense = 110;
    this.spAttack = 45;
    this.spDefense = 55;
    this.speed = 65;
}

module.exports = protoInheritance({ base: Sandslash, super: Sandshrew });
