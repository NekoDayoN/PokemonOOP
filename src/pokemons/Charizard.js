const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Charmeleon = require('./Charmeleon');

function Charizard(nickname, charmeleon) {
    evolutionHelper({ pokemon: charmeleon, super: Charmeleon, base: this });
    this.name = "Charizard";
    this.nickname = nickname || '';
    this.hp = 78;
    this.attack = 84;
    this.defense = 78;
    this.spAttack = 109;
    this.spDefense = 85;
    this.speed = 100;
}

module.exports = protoInheritance({ base: Charizard, super: Charmeleon });
