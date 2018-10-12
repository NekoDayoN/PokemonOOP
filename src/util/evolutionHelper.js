const evolutionHelper = args => {
    const isPokemonValid = args.pokemon instanceof args.super;

    args.pokemon !== undefined && isPokemonValid 
    ? Object.assign(args.base, args.pokemon)
    : Object.assign(args.base, new args.super);
}

module.exports = evolutionHelper;
