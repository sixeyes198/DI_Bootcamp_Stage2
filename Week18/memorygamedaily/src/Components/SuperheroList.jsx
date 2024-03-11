import Supers from "./Supers.json";

function SuperHeroList(props) {
  return Supers.superheroes.map((superhero) => (
    <div key={superhero.id}>
      <div>
        <img src={superhero.image} alt={superhero.name} />
        <h3>{superhero.name}</h3>
        <p>{superhero.occupation}</p>
      </div>
    </div>
  ));
}

export default SuperHeroList;
