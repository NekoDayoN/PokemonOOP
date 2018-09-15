const attacks = require('../attack/attacks');
const types = require('../types');
const Pokemon = require('./Pokemon');

const { Growl } = attacks;
const { Peck } = attacks;

function Spearow(nickname) {
    Pokemon.call(this, nickname || "Spearow");
    this.types = [types.normal,types.flying];
    this.attacks = [new Growl,new Peck];
    this.level = 1;
    this.hp = 40;
    this.attack = 60;
    this.defense = 30;
    this.spAttack = 31;
    this.spDefense = 31;
    this.speed = 70;
}

Spearow.prototype = Object.create(Spearow.prototype);

module.exports = Spearow;