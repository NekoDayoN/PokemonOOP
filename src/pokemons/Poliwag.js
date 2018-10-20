const Pokemon = require('./Pokemon'),
      types = require('../types'),
      attacks = require('../attack/attacks')
      protoInheritance = require('../util/protoInheritance');

const { WaterGun } = attacks;

function Poliwag(nickname) {
    Pokemon.call(this, "Poliwag");
    this.nickname = nickname || "";
    this.types = [ types.water ];
    this.attacks = [ new WaterGun ];
    this.level = 1;
    this.hp = 40;
    this.attack = 50;
    this.defense = 40;
    this.spAttack = 40;
    this.spDefense = 40;
    this.speed = 90;
}

module.exports = protoInheritance({ base: Poliwag, super: Pokemon });
