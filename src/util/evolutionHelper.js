const evolutionHelper = args => {
    args.pokemon !== undefined && args.pokemon instanceof args.super
    ? Object.assign(args.base, args.pokemon)
    : Object.assign(args.base, new args.super);
}

module.exports = evolutionHelper;
