const types = require('../types');
const Pokemon = require('./Pokemon');
const attacks = require('../attack/attacks');

const { DefenseCurl, Scratch } = attacks;

function Sandshrew(nickname) {
    Pokemon.call(this, nickname || "Sandshrew");
    this.types = [ types.ground ];
    this.attacks = [ new DefenseCurl, new Scratch ];
    this.level = 1;
    this.hp = 50;
    this.attack = 75;
    this.defense = 85;
    this.spAttack = 20;
    this.spDefense = 30;
    this.speed = 40;
}

Sandshrew.prototype = Object.create(Pokemon.prototype);

module.exports = Sandshrew;
