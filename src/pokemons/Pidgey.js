const Pokemon = require('./Pokemon');

function Pidgey(nickname) {
    Pokemon.call(this, nickname || "Pidgey");
}

Pidgey.prototype = Object.create(Pokemon.prototype);

module.exports = Pidgey;