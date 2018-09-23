const types = require('../types');
const Pokemon = require('./Pokemon');
const attacks = require('../attack/attacks');

const { Growl, Scratch } = attacks;

function Nidoran(nickname) {
    Pokemon.call(this, nickname || "Nidoran");
    this.types = [types.poison];
    this.attacks = [new Growl,new Scratch];
    this.level = 1;
    this.hp = 55;
    this.attack = 47;
    this.defense = 52;
    this.spAttack = 40;
    this.spDefense = 40;
    this.speed = 41;
}

Nidoran.prototype = Object.create(Pokemon.prototype);

module.exports = Nidoran;