const types = require('../types');
const Pokemon = require('./Pokemon');

const attacks = require('../attack/attacks');
const { Growl } = attacks;
const { Scratch } = attacks;

function Charmander() {
    Pokemon.call(this, 'Charmander');
    this.types = [types.fire];
    this.level = 1;
    this.hp = 39;
    this.attack = 52;
    this.defense = 43;
    this.spAttack = 60;
    this.spDefense = 50;
    this.speed = 65;
    this.attacks = [new Growl, new Scratch];
}

Charmander.prototype = Object.create(Pokemon.prototype);

module.exports = Charmander;
