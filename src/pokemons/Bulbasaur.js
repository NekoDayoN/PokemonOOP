const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { Growl, Tackle } = attacks;

function Bulbasaur(nickname) {
    Pokemon.call(this, 'Bulbasaur');
    this.types = [ types.grass, types.poison ];
    this.attacks = [ new Growl, new Tackle ];
    this.nickname = nickname || '';
    this.hp = 45;
    this.level = 1;
    this.attack = 49;
    this.defense = 49;
    this.speed = 45;
    this.spAttack = 65;
    this.spDefense = 65;
}

module.exports = protoInheritance({ base: Bulbasaur, super: Pokemon });
