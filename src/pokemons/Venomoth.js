const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Venonat = require('./Venonat');

function Venomoth(nickname, venonat) {
    evolutionHelper({ pokemon: venonat, super: Venonat, base: this });
    this.name = "Venomoth";
    this.nickname = nickname || "";
    this.hp = 70;
    this.attack = 65;
    this.defense = 60;
    this.spAttack = 90;
    this.spDefense = 75;
    this.speed = 90;
}

module.exports = protoInheritance({ base: Venomoth, super: Venonat });
