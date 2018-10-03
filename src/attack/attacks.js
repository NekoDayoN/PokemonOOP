const multiFileLoader = require('../util/multiFileLoader');

const attacks = [
    "Attack",
    "Growl",
    "Tackle",
    "Scratch",
    "TailWhip",
    "StringShot",
    "PoisonSting",
    "Peck",
    "Leer",
    "Wrap",
    "ThunderShock",
    "DefenseCurl",
    "Pound",
    "Ember",
    "Absorb",
    "Growth",
    "WaterGun"
];

module.exports = multiFileLoader(__dirname + '/', attacks);
