const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { Growl, Scratch } = attacks;

function NidoranFemale(nickname) {
    Pokemon.call(this, "Nidoran Female");
    this.types = [ types.poison ];
    this.attacks = [ new Growl, new Scratch ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 55;
    this.attack = 47;
    this.defense = 52;
    this.spAttack = 40;
    this.spDefense = 40;
    this.speed = 41;
}

module.exports = protoInheritance({ base: NidoranFemale, super: Pokemon });
