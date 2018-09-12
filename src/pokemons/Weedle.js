const Pokemon = require('./Pokemon');

function Weedle(nickname) {
    Pokemon.call(this, nickname || "Weedle")
}

Weedle.prototype = Object.create(Pokemon.prototype);

module.exports = Weedle;