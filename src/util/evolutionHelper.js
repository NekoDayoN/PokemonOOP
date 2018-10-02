const evolutionHelper = args => {
    const isPokemonValid = args.pokemon instanceof args._constructor;
    
    if(args.pokemon !== undefined && isPokemonValid) {
        const pokemon = {};

        Object.assign(pokemon, args.pokemon);
        
        return pokemon;
    }
    return null;
}

module.exports = evolutionHelper;
