const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Pidgeotto = require('./Pidgeotto');

function Pidgeot(nickname, pidgeotto) {
    evolutionHelper({ pokemon: pidgeotto, _constructor: Pidgeotto });
    this.name = "Pidgeot";
    this.nickname = nickname || "";
    this.level = 1;
    this.hp = 83;
    this.attack = 80;
    this.defense = 70;
    this.spAttack = 70;
    this.spDefense = 70;
    this.speed = 101;
}

module.exports = protoInheritance({ base: Pidgeot, super: Pidgeotto });
