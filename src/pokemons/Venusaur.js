const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Ivysaur = require('./Ivysaur');

function Venusaur(nickname, ivysaur) {
    evolutionHelper({ pokemon: ivysaur, super: Ivysaur, base: this });
    this.name = 'Venusaur';
    this.nickname = nickname || '';
    this.hp = 80;
    this.attack = 82;
    this.defense = 83;
    this.spAttack = 100;
    this.spDefense = 100;
    this.speed = 80;
}

module.exports = protoInheritance({ base: Venusaur, super: Ivysaur });
