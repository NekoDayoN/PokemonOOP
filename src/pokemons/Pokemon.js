const types = require('../types.js');
const { Attack } = require('../attack/attacks.js');

function Pokemon(name) {
    this.name = name;
    this.nickname = '';
    this.types = [ types.undefined ];
    this.attacks = [ new Attack ];
    this.level = 0;
    this.hp = 0;
    this.attack = 0;
    this.defense = 0;
    this.speed = 0;
    this.spAttack = 0;
    this.spDefense = 0;
}

Pokemon.prototype.getTypes = function() {
    return this.types.join(' ');
}

Pokemon.prototype.talk = function() {
    return this.name;
}

module.exports = Pokemon;
