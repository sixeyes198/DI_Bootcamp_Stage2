// import React, { useState } from "react";

// const Form = () => {
//   const [first_name, setFirstName] = useState("");
//   const [last_name, setLastName] = useState("");
//   const [Age, setAge] = useState("");
//   const [press, setPress] = useState(false);
//   const [gender, setGender] = useState("");
//   const [destination, setDestination] = useState("");
//   const [checkbox, setCheckbox] = useState(false);
//   const [inputs, setInputs] = useState({
//     first_name: "",
//     last_name: "",
//     Age: "",
//     press: "",
//     gender: "",
//     destination: "",
//     checkbox: "",
//   });

//   const handleChange = (e) => {
//     e.preventDefault();
//     console.log(
//       first_name,
//       last_name,
//       Age,
//       press,
//       gender,
//       destination,
//       checkbox
//     );
//     console.log(inputs);
//   };

//   return (
//     <div className="topForm">
//       <h1>Form</h1>
//       <form onSubmit={(e) => handleChange(e)}>
//         First Name:
//         <input
//           name="First_name"
//           type="text"
//           placeholder="First Name"
//           onChange={(e) => handleChange(e.target.value)}
//         />
//         <br></br>
//         Last Name:{" "}
//         <input
//           name="Last_name"
//           type="text"
//           placeholder="Last Name"
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <br></br>
//         Age:{" "}
//         <input
//           name="Age"
//           type="text"
//           placeholder="Age"
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <br></br>
//         <input
//           type="radio"
//           name="gender"
//           value="Male"
//           onChange={(e) => setPress(e.target.value)}
//         />
//         Male
//         <br></br>
//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           onChange={(e) => setPress(e.target.value)}
//         />
//         Female
//         <br></br>
//         <label>Select your destination</label>
//         <br></br>
//         <select
//           name="destination"
//           onChange={(e) => setDestination(e.target.value)}
//         >
//           <option value>-- Please Choose a destination --</option>
//           <option value="Thailand">Thailand</option>
//           <option value="Japan">Japan</option>
//           <option value="Brazil">Brazil</option>
//         </select>
//         <br></br>
//         <label>Dietary restrictions:</label>
//         <br></br>
//         <input
//           type="checkbox"
//           name="nutsFree"
//           value="nutsFree"
//           onChange={(e) => setCheckbox(e.target.value)}
//         />{" "}
//         Nuts free
//         <br></br>
//         <input
//           type="checkbox"
//           name="LactoseFree"
//           value="LactoseFree"
//           onChange={(e) => setCheckbox(e.target.value)}
//         />{" "}
//         Lactose free
//         <br></br>
//         <input
//           type="checkbox"
//           name="Vegan"
//           value="Vegan"
//           onChange={(e) => setCheckbox(e.target.value)}
//         />{" "}
//         Vegan
//         <br></br>
//         <input type="submit" value="submit" />
//       </form>
//     </div>
//   );
// };
// export default Form;

import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    Age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    LactoseFree: false,
    Vegan: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    const queryString = new URLSearchParams(inputs).toString();
    window.location.href = `http://localhost:3000?${queryString}`;
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });
  };

  return (
    <div className="topForm">
      <h1>Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        First Name:
        <input
          name="first_name"
          type="text"
          placeholder="First Name"
          value={inputs.first_name}
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        Last Name:{" "}
        <input
          name="last_name"
          type="text"
          placeholder="Last Name"
          value={inputs.last_name}
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        Age:{" "}
        <input
          name="Age"
          type="text"
          placeholder="Age"
          value={inputs.Age}
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={inputs.gender === "Male"}
          onChange={(e) => handleChange(e)}
        />
        Male
        <br></br>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={inputs.gender === "Female"}
          onChange={(e) => handleChange(e)}
        />
        Female
        <br></br>
        <label>Select your destination</label>
        <br></br>
        <select
          name="destination"
          value={inputs.destination}
          onChange={(e) => handleChange(e)}
        >
          <option value>-- Please Choose a destination --</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br></br>
        <label>Dietary restrictions:</label>
        <br></br>
        <input
          type="checkbox"
          name="nutsFree"
          value="nutsFree"
          checked={inputs.nutsFree}
          onChange={(e) => handleChange(e)}
        />{" "}
        Nuts free
        <br></br>
        <input
          type="checkbox"
          name="LactoseFree"
          value="LactoseFree"
          checked={inputs.LactoseFree}
          onChange={(e) => handleChange(e)}
        />{" "}
        Lactose free
        <br></br>
        <input
          type="checkbox"
          name="Vegan"
          value="Vegan"
          checked={inputs.Vegan}
          onChange={(e) => handleChange(e)}
        />{" "}
        Vegan
        <br></br>
        <input type="submit" value="submit" />
        <br></br>
        <div>
          <h2>Form Data:</h2>
          <p>First Name: {inputs.first_name}</p>
          <p>Last Name: {inputs.last_name}</p>
          <p>Age: {inputs.Age}</p>
          <p>Gender: {inputs.gender}</p>
          <p>Destination: {inputs.destination}</p>
          <p>Nuts Free: {inputs.nutsFree ? "Yes" : "No"}</p>
          <p>Lactose Free: {inputs.LactoseFree ? "Yes" : "No"}</p>
          <p>Vegan: {inputs.Vegan ? "Yes" : "No"}</p>
        </div>
        <br />
      </form>
    </div>
  );
};
export default Form;
