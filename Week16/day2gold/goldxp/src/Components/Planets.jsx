import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";

const Planets = (props) => {
  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

  return planets.map((planet, index) => (
    <ListGroup as="ul" key={index}>
      <ListGroup.Item as="li">{planet}</ListGroup.Item>
    </ListGroup>
  ));
};
export default Planets;
