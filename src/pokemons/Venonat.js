const Pokemon = require('./Pokemon'),
      protoInheritance = require('../util/protoInheritance'),
      types = require('../types');

const { Tackle } = require('../attack/attacks');

function Venonat(nickname) {
    this.level = 1;
    this.name = "Venonat";
    this.nickname = nickname || "";
    this.hp = 60;
    this.attack = 55;
    this.defense = 50;
    this.spAttack = 40;
    this.spDefense = 55;
    this.speed = 45;
    this.types = [ types.bug, types.poison ];
    this.attacks = [ new Tackle ];
}

module.exports = protoInheritance({ base: Venonat, super: Pokemon });
