const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Rattata = require('./Rattata');

function Raticate(nickname, rattata) {
    evolutionHelper({ pokemon: rattata, super: Rattata, base: this });
    this.name = 'Raticate';
    this.nickname = nickname || '';
    this.hp = 55;
    this.attack = 81;
    this.defense = 60;
    this.spAttack = 50;
    this.spDefense = 70;
    this.speed = 97;
}

module.exports = protoInheritance({ base: Raticate, super: Rattata });
