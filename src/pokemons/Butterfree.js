const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance'),
      types = require('../types'),
      attacks = require('../attack/attacks');

const Metapod = require('./Metapod'),
      { Confusion, Gust } = attacks;

function Butterfree(nickname, metapod) {
    evolutionHelper({ pokemon: metapod, super: Metapod, base: this });
    this.name = "Butterfree";
    this.nickname = nickname || "";
    this.types.push(types.flying);
    this.hp = 60;
    this.attack = 45;
    this.defense = 50;
    this.spAttack = 90;
    this.spDefense = 80;
    this.speed = 70;
    
    this.attacks.pop(); 
    this.attacks.splice(2, 0, new Confusion, new Gust);
}

module.exports = protoInheritance({ base: Butterfree, super: Metapod });
