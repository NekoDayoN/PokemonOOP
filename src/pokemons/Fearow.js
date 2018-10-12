const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Spearow = require('./Spearow');

function Fearow(nickname, spearow) {
    evolutionHelper({ pokemon: spearow, super: Spearow, base: this });
    this.name = "Fearow";
    this.nickname = nickname || "";
    this.hp = 65;
    this.attack = 90;
    this.defense = 65;
    this.spAttack = 61;
    this.spDefense = 61;
    this.speed = 100;
}

module.exports = protoInheritance({ base: Fearow, super: Spearow });
