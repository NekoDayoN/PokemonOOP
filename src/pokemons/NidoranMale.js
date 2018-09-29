const types = require('../types'),
      Pokemon = require('./Pokemon'),
      attacks = require('../attack/attacks');

const { Leer, Peck } = attacks;

function NidoranMale(nickname) {
    Pokemon.call(this, nickname || "Nidoran Male");
    this.types = [ types.poison ];
    this.attacks = [ new Leer, new Peck ];
    this.level = 1;
    this.hp = 46;
    this.attack = 57;
    this.defense = 40;
    this.spAttack = 40;
    this.spDefense = 40;
    this.speed = 50;
}

NidoranMale.prototype = Object.create(Pokemon.prototype);

module.exports = NidoranMale;
