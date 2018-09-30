const multiFileLoader = require('../util/multiFileLoader');

const pokemons = [
    'Bulbasaur',
    'Ivysaur',
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
    'Zubat',
    'Oddish'
];

module.exports = multiFileLoader(__dirname + '/', pokemons);
