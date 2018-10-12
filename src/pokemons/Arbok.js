const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Ekans = require('./Ekans');

function Arbok(nickname, ekans) {
    evolutionHelper({ pokemon: ekans, super: Ekans, base: this });
    this.name = "Arbok";
    this.nickname = nickname || "";
    this.hp = 60;
    this.attack = 95;
    this.defense = 69;
    this.spAttack = 65;
    this.spDefense = 79;
    this.speed = 80;
}

module.exports = protoInheritance({ base: Arbok, super: Ekans });
