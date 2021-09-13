
const picturePokemon = document.getElementById('picture')
const stats = document.getElementById('stats')
const buttonPokemon = document.getElementById('button_blue')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const random = getRandomInt(1,152)

async function getPokemon(id) {
    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

        const data = await res.json()

        const pokemon = {
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
            nombre: data.name
        }

        pintarPokemon(pokemon)

    } catch (error) {
        console.log('error', error)
    }
}


function pintarPokemon (pokemon) {

    const img = document.createElement('img')
    img.src = pokemon.img
    picturePokemon.appendChild(img)

    const pokemonName = document.createElement('div')
    pokemonName.classList.add('poke_name')
    pokemonName.innerText = pokemon.nombre
    stats.appendChild(pokemonName)

}

getPokemon(random)












