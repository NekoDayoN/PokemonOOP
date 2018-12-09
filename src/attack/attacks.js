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
    "WaterGun",
    "Harden",
    "Confusion",
    "Gust",
    "FuryAttack",
    "SandAttack",
    "Teleport",
    "LowKick"
];

module.exports = multiFileLoader(__dirname + '/', attacks);
