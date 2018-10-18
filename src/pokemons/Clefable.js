const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Clefairy = require('./Clefairy');

function Clefable(nickname, clefairy) {
    evolutionHelper({ pokemon: clefairy, super: Clefairy, base: this });
    this.name = "Clefable";
    this.nickname = nickname || "";
    this.hp = 95;
    this.attack = 70;
    this.defense = 73;
    this.spAttack = 95;
    this.spDefense = 90;
    this.speed = 60;
}

module.exports = protoInheritance({ base: Clefable, super: Clefairy });
