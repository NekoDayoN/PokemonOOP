const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Bulbasaur = require('./Bulbasaur');

function Ivysaur(nickname, bulbasaur) {
    evolutionHelper({ pokemon: bulbasaur, super: Bulbasaur, base: this });
    this.name = 'Ivysaur';
    this.nickname = nickname || '';
    this.hp = 60;
    this.attack = 62;
    this.defense = 63;
    this.spAttack = 80;
    this.spDefense = 80;
    this.speed = 60;
}

module.exports = protoInheritance({ base: Ivysaur, super: Bulbasaur });
