const types = require('../types'),
      Pokemon = require('./Pokemon'),
      protoInheritance = require('../util/protoInheritance');

const { Tackle } = require('../attack/attacks');

function Pidgey(nickname) {
    Pokemon.call(this, "Pidgey");
    this.types = [ types.normal, types.flying ];
    this.attacks = [ new Tackle ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 40;
    this.attack = 45;
    this.defense = 40;
    this.spAttack = 35;
    this.spDefense = 35;
    this.speed = 56;
}

module.exports = protoInheritance({ base: Pidgey, super: Pokemon });
