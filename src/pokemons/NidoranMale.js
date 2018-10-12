const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks'),
      protoInheritance = require('../util/protoInheritance');

const { Leer, Peck } = attacks;

function NidoranMale(nickname) {
    Pokemon.call(this, "Nidoran Male");
    this.types = [ types.poison ];
    this.attacks = [ new Leer, new Peck ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 46;
    this.attack = 57;
    this.defense = 40;
    this.spAttack = 40;
    this.spDefense = 40;
    this.speed = 50;
}

module.exports = protoInheritance({ base: NidoranMale, super: Pokemon });
