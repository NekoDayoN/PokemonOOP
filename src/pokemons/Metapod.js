const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Caterpie = require('./Caterpie'),
    { Harden } = require('../attack/attacks');

function Metapod(nickname, caterpie) {
    evolutionHelper({ pokemon: caterpie, super: Caterpie, base: this });
    this.name = "Metapod";
    this.nickname = nickname || "";
    this.hp = 50;
    this.attack = 20;
    this.defense = 55;
    this.spAttack = 25;
    this.spDefense = 25;
    this.speed = 30;
    this.attacks.push(new Harden);
}

module.exports = protoInheritance({ base: Metapod, super: Caterpie });
