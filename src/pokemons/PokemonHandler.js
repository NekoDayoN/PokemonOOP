const fetchPokemon = name => require('./' + name);

function PokemonHandler(pokemons) {
    const nextToExport = {};

    for(const pokemon of pokemons) {
        let reqPokemon = fetchPokemon(pokemon);
        nextToExport[pokemon] = reqPokemon;
    }

    return nextToExport;
}

module.exports = PokemonHandler;
