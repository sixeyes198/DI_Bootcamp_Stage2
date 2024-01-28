const container = document.getElementById("container");
const name = document.getElementById("name");
const height = document.getElementById("height");
const gender = document.getElementById("gender");
const birthY = document.getElementById("birthY");
const homeWorld = document.getElementById("homeWorld");
const button = document.getElementById("button");
const loader = document.getElementById("loading");

function randomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}
randomNumber();

try {
  async function randomResult() {
    loader.style.display = "block";
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
    let number = randomNumber(83);
    const dataToParsed = await fetch(
      `https://www.swapi.tech/api/people/${number}`
    );
    if (dataToParsed.ok) {
      const finalResult = await dataToParsed.json();
      console.log(finalResult);

      async function worldId() {
        const url = finalResult.result.properties.homeworld;
        const secondRespo = await fetch(`${url}`);
        if (secondRespo.ok) {
          const world = await secondRespo.json();
          console.log(world.result.properties.name);
          name.innerText = finalResult.result.properties.name;
          height.innerText = `Height: ${finalResult.result.properties.height}`;
          gender.innerText = `Gender: ${finalResult.result.properties.gender}`;
          birthY.innerText = `Birth Year: ${finalResult.result.properties.birth_year} `;
          homeWorld.innerText = `Home World: ${world.result.properties.name}`;
        } else {
          throw new Error("there is a problem with the url");
        }
      }

      worldId();
    } else {
      throw new Error("we have an issue");
    }
  }
  randomResult();

  button.addEventListener("click", randomResult);
} catch {
  console.log("error found");
}
