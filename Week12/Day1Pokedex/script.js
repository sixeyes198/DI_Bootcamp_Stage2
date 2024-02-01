const imgContainer = document.getElementById("pokemonImgContainer");
const pokemonDataContainer = document.getElementById("pokedexDataContainer");

try {
  async function randomButton() {
    function getRandomNumber(max) {
      return Math.floor(Math.random() * max);
    }

    const randomPokemonId = getRandomNumber(135);
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
    );

    if (res.ok) {
      const pokemonData = await res.json();
      console.log(pokemonData);
      /////////////////////
      async function previousButton() {
        const res2 = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${randomPokemonId - 1}/`
        );
        const previousPokemon = await res2.json();
        console.log(previousPokemon);
      }
      previousButton();
      ////////////////////
      async function nextButton() {
        const res3 = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${randomPokemonId + 1}/`
        );
        const nextPokemon = await res3.json();
        console.log(nextPokemon);
      }
      nextButton();
    } else {
      throw new Error("Can't find the pokemon");
    }
  }
  randomButton();
} catch (e) {
  console.log(e);
}
