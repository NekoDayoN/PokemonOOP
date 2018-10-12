const multiFileLoader = require('../util/multiFileLoader');

const pokemons = [
    'Bulbasaur', 'Ivysaur', 'Venusaur',
    'Charmander', 'Charmeleon', 'Charizard',
    'Squirtle', 'Wartortle', 'Blastoise',
    'Caterpie', 'Metapod', 'Butterfree',
    'Weedle', 'Kakuna', 'Beedrill',
    'Pidgey', 'Pidgeotto', 'Pidgeot',
    'Rattata', 'Raticate',
    'Spearow', 'Fearow',
    'Ekans', 'Arbok',
    'Pikachu', 'Raichu',
    'Sandshrew', 'Sandslash',
    'NidoranFemale',
    'NidoranMale',
    'Clefairy',
    'Vulpix',
    'Jigglypuff',
    'Zubat',
    'Oddish'
];

module.exports = multiFileLoader(__dirname + '/', pokemons);
