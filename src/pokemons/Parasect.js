const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Paras = require('./Paras'),
    { Absorb } = require('../attack/attacks');

function Parasect(nickname, paras) {
    evolutionHelper({ pokemon: paras, super: Paras, base: this });
    this.name = "Parasect";
    this.nickname = nickname || "";
    this.hp = 60;
    this.attack = 95;
    this.defense = 80;
    this.spAttack = 60;
    this.spDefense = 80;
    this.speed = 30;
    this.attacks.push( new Absorb );
}

module.exports = protoInheritance({ base: Parasect, super: Paras });
