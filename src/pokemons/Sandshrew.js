const Pokemon = require('./Pokemon');

function Sandshrew(nickname) {
    Pokemon.call(this, nickname || "Sandshrew");
}

Sandshrew.prototype = Object.create(Pokemon.prototype);

module.exports = Sandshrew;