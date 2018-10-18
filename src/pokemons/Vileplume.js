const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Gloom = require('./Gloom');

function Vileplume(nickname, gloom) {
    evolutionHelper({ pokemon: gloom, super: Gloom, base: this });
    this.name = "Vileplume";
    this.nickname = nickname || "";
    this.hp = 75;
    this.attack = 80;
    this.defense = 85;
    this.spAttack = 110;
    this.spDefense = 90;
    this.speed = 50;
}

module.exports = protoInheritance({ base: Vileplume, super: Gloom });
