const _wasNickname = args => {
    if(args.pokemon.name === args.className.old) {
        return args.className.new;
    }
    return args.pokemon.name;
}

const evolutionHelper = args => {
    if(args.pokemon !== undefined && args.pokemon instanceof args._constructor) {
        const pokemon = {};

        Object.assign(pokemon, args.pokemon);
        
        pokemon.name = _wasNickname({
            pokemon: args.pokemon,
            className: {
                new: args.className.new,
                old: args.className.old
            }
        });
        
        return pokemon;
    }
    return null;
}

module.exports = evolutionHelper;
