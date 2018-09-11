const types = require('../types');
const Pokemon = require('./Pokemon');

function Caterpie(nickname) {
    Pokemon.call(this, nickname || "Caterpie");
    this.types = [types.bug];
}

Caterpie.prototype = Object.create(Pokemon.prototype);

module.exports = Caterpie;