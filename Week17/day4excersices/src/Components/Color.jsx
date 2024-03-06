import React from "react";
import Child from "./Child";

class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  // Part 1
  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
      alert("useEffect reached");
    }, 2000);
  }

  // Part 2
  componentDidUpdate() {
    console.log("Updated after 2 seconds");
  }

  getSnapshotBeforeUpdate() {
    console.log("In getSnapshotBeforeUpdate ");
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  removeHeader = () => {
    this.setState({ show: false });
  };

  render() {
    if (this.state.show === true) {
      return (
        <>
          <Child />
          <button onClick={this.removeHeader}>Delete Header</button>

          <h1>My favorite Color is: {this.state.favoriteColor}</h1>
          <button onClick={this.changeColor}>Change Color</button>
        </>
      );
    } else {
      return null;
    }
  }
}

export default Color;
