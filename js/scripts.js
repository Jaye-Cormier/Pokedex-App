let GalarPokemonList =[
    {
        name: 'Grookey',
        species: 'Chimp Pokemon',
        types: ['grass'],
        weaknesses: ['fire'],
        height: .3
    },
    {
        name: 'Thwackey',
        species: 'Beat Pokemon',
        types: ['grass'],
        weaknesses: ['fire'],
        height: .7
    },
    {
        name: 'Rillaboom',
        species: 'Drummer Pokemon',
        types: ['grass'],
        weaknesses: ['fire'],
        height: 2.1
    },
    {
        name: 'Scorbunny',
        species: 'Rabbit Pokemon',
        types: ['fire'],
        weaknesses: ["water"],
        height: .3
    },
    {
        name: 'Raboot',
        species: 'Rabbit Pokemon',
        types: ['fire'],
        weaknesses: ['water'],
        height: .6
    },
    {
        name: 'Cinderace',
        species: 'Striker Pokemon',
        types: ['fire'],
        weaknesses: ['water'],
        height: 1.4
    },
    {
        name: 'Sobble',
        species: 'Water Lizard Pokemon',
        types: ['water'],
        weaknesses: ['grass'],
        height: .3
    },
    {
        name: 'Drizzile',
        species: 'Water Lizard Pokemon',
        types: ['water'],
        weaknesses: ['grass'],
        height: .7
    },
    {
        name: 'Inteleon',
        species: 'Secret Agent Pokemon',
        types: ['water'],
        weaknesses: ['grass'],
        height: 1.9
    },
    {
        name: 'Blipbug',
        species: 'Larva Pokemon',
        types: ['bug'],
        weaknesses: ['fire', 'flying', 'rock'],
        height: .4
    },
    {
        name: 'Dottler',
        species: 'Radome Pokemon',
        types: ['bug', 'psychic'],
        weaknesses: ['ghost', 'fire', 'flying', 'dark', 'rock', 'bug'],
        height: .4
    },
    {
        name: 'Orbeetle',
        species: 'Seven Spot Pokemon',
        types: ['bug', 'psychic'],
        weaknesses: ['ghost', 'fire', 'flying', 'dark', 'rock', 'bug'],
        height: .4
    }
];

for (let i= 0; i < GalarPokemonList.length; i++) {
    document.write('<div class="pokemon"><div class="pokemon-name">' + GalarPokemonList[i].name + '</div><br/>' 
                + 'Species: ' + GalarPokemonList[i].species + '<br/>' 
                + 'Types: ' + GalarPokemonList[i].types + '<br/>' 
                + 'Height: ' + GalarPokemonList[i].height + 'm' + '<br/>');
    if(GalarPokemonList[i].height > 2) {
        document.write('<strong>' + GalarPokemonList[i].name + '</strong> is really tall!<br/>');
        
    }
    document.write('<br/></div>');
}
