import React from "react";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

class Excersice extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a header</h1>
        <p>This is a paragraph</p>
        <a href="">This is a Link</a>
        <form>
          This is a form:<br></br>
          <input type="text"></input>
          <button>Submit</button>
        </form>
        <img
          src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg"
          alt="Coding Enviorment"
        ></img>
        <ul>
          This is a list:
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}
export default Excersice;
