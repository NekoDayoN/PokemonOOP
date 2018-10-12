const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Weedle = require('./Weedle'),
    { Harden } = require('../attack/attacks');

function Kakuna(nickname, weedle) {
    evolutionHelper({ pokemon: weedle, super: Weedle, base: this });
    this.name = "Kakuna";
    this.nickname = nickname || "";
    this.hp = 45;
    this.attack = 25;
    this.defense = 50;
    this.spAttack = 25;
    this.spDefense = 25;
    this.speed = 35;
    this.attacks.push(new Harden);
}

module.exports = protoInheritance({ base: Kakuna, super: Weedle });
