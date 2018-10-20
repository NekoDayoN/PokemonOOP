const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Poliwag = require('./Poliwag');

function Poliwhirl(nickname, poliwag) {
    evolutionHelper({ pokemon: poliwag, super: Poliwag, base: this });
    this.name = "Poliwhirl";
    this.nickname = nickname || "";
    this.hp = 65;
    this.attack = 65;
    this.defense = 65;
    this.spAttack = 50;
    this.spDefense = 50;
    this.speed = 90;
}

module.exports = protoInheritance({ base: Poliwhirl, super: Poliwag });
