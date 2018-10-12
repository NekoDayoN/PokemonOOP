const evolutionHelper = require('../util/evolutionHelper'),
      protoInheritance = require('../util/protoInheritance');

const Pidgey = require('./Pidgey'),
    { Gust, SandAttack } = require('../attack/attacks');

function Pidgeotto(nickname, pidgey) {
    evolutionHelper({ pokemon: pidgey, super: Pidgey, base: this });
    this.name = "Pidgeotto";
    this.nickname = nickname || "";
    this.level = 1;
    this.hp = 63;
    this.attack = 60;
    this.defense = 55;
    this.spAttack = 50;
    this.spDefense = 50;
    this.speed = 71;
    this.attacks.push(new Gust, new SandAttack);
}

module.exports = protoInheritance({ base: Pidgeotto, super: Pidgey });
