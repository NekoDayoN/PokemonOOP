const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Charmander = require('./Charmander'),
      { Ember } = require('../attack/attacks');

function Charmeleon(nickname, charmander) {
    evolutionHelper({ pokemon: charmander, super: Charmander, base: this });
    this.name = "Charmeleon";
    this.nickname = nickname || '';
    this.hp = 58;
    this.attack = 64;
    this.defense = 58;
    this.spAttack = 80;
    this.spDefense = 65;
    this.speed = 80;
    this.attacks.push(new Ember);
}

module.exports = protoInheritance({ base: Charmeleon, super: Charmander });
