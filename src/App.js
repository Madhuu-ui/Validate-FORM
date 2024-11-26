import "./styles.css";
import { useState } from "react";

export default function App() {
  const [values, setvalues] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPass: "",
  });
  const [errorss, setErrors] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalues((prevState) => ({
      ...prevState,
      [name]: value, // name should be in [] to Update the specific field in the state
    }));
  };

  const validateform = () => {
    const { FirstName, LastName, Email, Password, ConfirmPass } = values;
    console.log(FirstName);
    if (FirstName.length < 0) {
      setErrors((err) => ({ ...err, FirstName: "First name cannot be empty" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateform();
    console.log("submitted");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formelement">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={values.FirstName}
          onChange={handleChange}
        />
        <p>{errorss.FirstName}</p>
        <label>Last Name</label>
        <input
          type="text"
          id="lastName"
          name="LastName"
          value={values.LastName}
          onChange={handleChange}
        />
        <label>
          Email
          <input
            type="email"
            name="EmailAdress"
            value={values.Email}
            onChange={handleChange}
          />
        </label>
        <label>Password</label>
        <input
          type="text"
          name="Password"
          value={values.Password}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="text"
          name="ConfirmPassword"
          value={values.ConfirmPass}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
