const types = require('../types');
const Pokemon = require('./Pokemon');
const attacks = require('../attack/attacks');

const { Leer, Wrap } = attacks;

function Ekans(nickname) {
    Pokemon.call(this, nickname || "Ekans");
    this.hp = 35;
    this.types = [ types.poison ];
    this.attacks = [ new Leer, new Wrap ];
    this.level = 1;
    this.attack = 60;
    this.defense = 44;
    this.speed = 55;
    this.spAttack = 40;
    this.spDefense = 54;
    this.defense = 55;
}

Ekans.prototype = Object.create(Pokemon.prototype);

module.exports = Ekans;