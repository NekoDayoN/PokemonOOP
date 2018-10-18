const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Oddish = require('./Oddish');

function Gloom(nickname, oddish) {
    evolutionHelper({ pokemon: oddish, super: Oddish, base: this });
    this.name = "Gloom";
    this.nickname = nickname || "";
    this.hp = 60;
    this.attack = 65;
    this.defense = 70;
    this.spAttack = 85;
    this.spDefense = 75;
    this.speed = 40;
}

module.exports = protoInheritance({ super: Oddish, base: Gloom });
