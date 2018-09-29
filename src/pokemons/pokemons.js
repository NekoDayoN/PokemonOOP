const multiFileLoader = require('../util/multiFileLoader');

const pokemons = [
    'Bulbasaur',
    'Charmander',
    'Squirtle',
    'Caterpie',
    'Weedle',
    'Pidgey',
    'Rattata',
    'Spearow',
    'Ekans',
    'Pikachu',
    'Sandshrew',
    'NidoranFemale',
    'NidoranMale',
    'Clefairy',
    'Vulpix',
    'Jigglypuff',
    'Zubat'
];

module.exports = multiFileLoader(__dirname + '/', pokemons);
