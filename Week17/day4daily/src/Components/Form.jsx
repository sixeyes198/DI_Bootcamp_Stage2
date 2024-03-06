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
    press: false,
    gender: "",
    destination: "",
    checkbox: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    const queryString = params.toString();
    window.location.href = `http://localhost:3000?${queryString}`;
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value =
      e.target.type === "checkbox" ? e.target.checkbox : e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });
  };

  return (
    <div className="topForm">
      <h1>Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        First Name:
        <input
          name="First_name"
          type="text"
          placeholder="First Name"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        Last Name:{" "}
        <input
          name="Last_name"
          type="text"
          placeholder="Last Name"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        Age:{" "}
        <input
          name="Age"
          type="text"
          placeholder="Age"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => handleChange(e)}
        />
        Male
        <br></br>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => handleChange(e)}
        />
        Female
        <br></br>
        <label>Select your destination</label>
        <br></br>
        <select name="destination" onChange={(e) => handleChange(e)}>
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
          onChange={(e) => handleChange(e)}
        />{" "}
        Nuts free
        <br></br>
        <input
          type="checkbox"
          name="LactoseFree"
          value="LactoseFree"
          onChange={(e) => handleChange(e)}
        />{" "}
        Lactose free
        <br></br>
        <input
          type="checkbox"
          name="Vegan"
          value="Vegan"
          onChange={(e) => handleChange(e)}
        />{" "}
        Vegan
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default Form;
