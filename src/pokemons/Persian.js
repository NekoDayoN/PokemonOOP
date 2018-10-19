const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Meowth = require('./Meowth');

function Persian(nickname, meowth) {
    evolutionHelper({ pokemon: meowth, super: Meowth, base: this });
    this.name = "Persian";
    this.nickname = nickname || "";
    this.hp = 65;
    this.attack = 70;
    this.defense = 60;
    this.spAttack = 65;
    this.spDefense = 65;
    this.speed = 115;
}

module.exports = protoInheritance({ base: Persian, super: Meowth });
