const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Squirtle = require('./Squirtle'),
      { WaterGun } = require('../attack/attacks');

function Wartortle(nickname, squirtle) {
    evolutionHelper({ pokemon: squirtle, super: Squirtle, base: this });
    this.name = 'Wartortle';
    this.nickname = nickname || '';
    this.hp = 59;
    this.attack = 63;
    this.defense = 80;
    this.spAttack = 65;
    this.spDefense = 80;
    this.speed = 58;
    this.attacks.push(new WaterGun);
}


module.exports = protoInheritance({ base: Wartortle, super: Squirtle });
