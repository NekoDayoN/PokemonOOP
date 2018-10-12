const protoInheritance = args => {
    args.base.prototype = Object.create(args.super.prototype);
    args.base.prototype.constructor = args.base;
    return args.base;
}

module.exports = protoInheritance;