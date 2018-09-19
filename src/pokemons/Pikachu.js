const Pokemon = require('./Pokemon');
const types = require('../types');
const attacks = require('../attack/attacks');

const { TailWhip } = attacks;
const { ThunderShock } = attacks;

function Pikachu(nickname) {
    Pokemon.call(this, nickname || "Pikachu");
    this.types = [types.eletric];
    this.attacks = [new TailWhip,new ThunderShock];
    this.level = 1;
    this.hp = 35;
    this.attack = 55;
    this.defense = 40;
    this.spAttack = 50;
    this.spDefense = 50;
    this.speed = 90;
}

Pikachu.prototype = Object.create(Pokemon.prototype);

module.exports = Pikachu;