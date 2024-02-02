const imgContainer = document.getElementById("pokemonImgContainer");
const pokemonDataContainer = document.getElementById("pokedexDataContainer");
const PokemonName = document.getElementById("name");
const pokemonId = document.getElementById("id");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const type = document.getElementById("type");

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const random = document.getElementById("random");

imgContainer.innerHTML = "";
PokemonName.innerText = "";
pokemonId.innerText = "";
height.innerText = "";
weight.innerText = "";
type.innerText = "";

let currentPokemonId;

random.addEventListener("click", randomButton);
previous.addEventListener("click", previousButton);
next.addEventListener("click", nextButton);

async function randomButton() {
  try {
    currentPokemonId = Math.floor(Math.random() * 140);
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`
    );

    if (res.ok) {
      const pokemonData = await res.json();
      appendPokemonInfo(pokemonData);
    } else {
      throw new Error("Can't find the pokemon");
    }
  } catch (error) {
    console.log(error);
  }
}

async function nextButton() {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${++currentPokemonId}`
    );
    if (res.ok) {
      const pokemonData = await res.json();
      appendPokemonInfo(pokemonData);
    } else {
      throw new Error("Can't find the next pokemon");
    }
  } catch (error) {
    console.log(error);
  }
}

async function previousButton() {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${--currentPokemonId}`
    );

    if (res.ok) {
      const pokemonData = await res.json();
      appendPokemonInfo(pokemonData);
    } else {
      throw new Error("Can't find the previous pokemon");
    }
  } catch (error) {
    console.log(error);
  }
}

function appendPokemonInfo(data) {
  PokemonName.innerText = data.name;
  pokemonId.innerText = `ID: ${data.id}`;
  height.innerText = `Height: ${data.height} M`;
  weight.innerText = `Weight: ${data.weight} kilograms`;
  type.innerText = `Type: ${data.types[0].type.name}`;

  const imageUrl = data.sprites.front_default;
  imgContainer.innerHTML = `<img src="${imageUrl}" alt="${data.name}">`;
}
