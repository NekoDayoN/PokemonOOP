const attacks = require('../attack/attacks'),
      types = require('../types'),
      Pokemon = require('./Pokemon');

const { Growl, Peck } = attacks;

function Spearow(nickname) {
    Pokemon.call(this, "Spearow");
    this.types = [ types.normal, types.flying ];
    this.attacks = [ new Growl, new Peck ];
    this.nickname = nickname || '';
    this.level = 1;
    this.hp = 40;
    this.attack = 60;
    this.defense = 30;
    this.spAttack = 31;
    this.spDefense = 31;
    this.speed = 70;
}

Spearow.prototype = Object.create(Spearow.prototype);
Spearow.prototype.constructor = Spearow;

module.exports = Spearow;