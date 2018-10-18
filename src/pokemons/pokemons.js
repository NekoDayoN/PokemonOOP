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
    'NidoranFemale', 'Nidorina', 'Nidoqueen',
    'NidoranMale', 'Nidorino', 'Nidoking',
    'Clefairy', 'Clefable',
    'Vulpix', 'Ninetales',
    'Jigglypuff', 'Wigglypuff',
    'Zubat', 'Golbat',
    'Oddish'
];

module.exports = multiFileLoader(__dirname + '/', pokemons);
