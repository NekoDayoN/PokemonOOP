const multiFileLoader = require('../util/multiFileLoader');

const pokemons = [
    'Bulbasaur',
    'Ivysaur',
    'Venusaur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Squirtle',
    'Wartortle',
    'Blastoise',
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
