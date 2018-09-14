const types = require('../types');
const Pokemon = require('./Pokemon');

const attacks = require('../attack/attacks');
const { Tackle } = attacks;
const { StringShot } = attacks;

function Caterpie(nickname) {
    Pokemon.call(this, nickname || "Caterpie");
    this.types = [types.bug];
    this.attacks = [new Tackle,new StringShot]
    this.level = 1;
    this.hp = 45;
    this.attack = 30;
    this.defense = 35;
    this.spAttack = 20;
    this.spDefense = 20;
    this.speed = 45;
}

Caterpie.prototype = Object.create(Pokemon.prototype);

module.exports = Caterpie;