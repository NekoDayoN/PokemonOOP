const Pokemon = require('./Pokemon'),
      types = require('../types');

let Bulbasaur = require('./Bulbasaur');

function Ivysaur(nickname, bulbasaur) {
    if(bulbasaur !== undefined && bulbasaur instanceof Bulbasaur) {
        Object.assign(this, bulbasaur);
        
        bulbasaur.name = bulbasaur.name === "Bulbasaur" ? bulbasaur.name = "Ivysaur" : bulbasaur.name;
        this.name = bulbasaur.name;
        return;
    }

    Object.assign(this, new Bulbasaur);
    this.name = nickname || 'Ivysaur';
    this.hp = 60;
    this.attack = 62;
    this.defense = 63;
    this.spAttack = 80;
    this.spDefense = 80;
    this.speed = 60;
}
Ivysaur.prototype = Object.create(Bulbasaur.prototype);
Ivysaur.prototype.constructor = Ivysaur;

module.exports = Ivysaur;
