const categories = require("./categories");
const types = require("../types");
const Attack = require("./Attack");

function TailWhip() {
    Attack.call(this, "TailWhip");
    this.category = categories.status;
    this.type = types.normal;
    this.accuracy = 1.0;
    this.power = 0;
    this.pp = 30;
    this.description = "Lowers the foe's DEFENSE.";
}

TailWhip.prototype = Object.create(Attack.prototype);
TailWhip.prototype._attack = function() {

}

module.exports = TailWhip;