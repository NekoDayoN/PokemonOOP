const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Vulpix = require('./Vulpix');

function Ninetales(nickname, vulpix) {
    evolutionHelper({ pokemon: vulpix, super: Vulpix, base: this });
    this.name = "Ninetales";
    this.nickname = nickname || "";
    this.hp = 73;
    this.attack = 76;
    this.defense = 75;
    this.spAttack = 81;
    this.spDefense = 100;
    this.speed = 100;
}

module.exports = protoInheritance({ base: Ninetales, super: Vulpix });
