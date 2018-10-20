const types = require('../types'),
      protoInheritance = require('../util/protoInheritance'),
      categories = require('./categories'),
      Attack = require('./Attack');

function Teleport() {
    Attack.call(this, "Teleport");
    this.type = types.psychic;
    this.category = categories.status;
    this.power = 0;
    this.accuracy = 0;
    this.pp = 20;
    this.description = "Use it to flee from any wild POKéMON. Also warps to the last POKé CENTER.";
}

module.exports = protoInheritance({ base: Teleport, super: Attack });
