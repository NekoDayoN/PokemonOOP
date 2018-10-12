const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { DefenseCurl, Scratch } = attacks;

function Sandshrew(nickname) {
    Pokemon.call(this, "Sandshrew");
    this.types = [ types.ground ];
    this.attacks = [ new DefenseCurl, new Scratch ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 50;
    this.attack = 75;
    this.defense = 85;
    this.spAttack = 20;
    this.spDefense = 30;
    this.speed = 40;
}

module.exports = protoInheritance({ base: Sandshrew, super: Pokemon });
