import { useState, useEffect } from 'react';
import './App.css';

function App() {
 const [formValues, setFormValues] = useState({ username: "", lastname: "", email: "", phoneno: "" });
 const [formErrors, setFormErrors] = useState({});
 const [submit, setSubmit] = useState(false);


 useEffect(() => {
  console.log(formValues);
}, [formValues]);

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setSubmit(Object.values(errors).every((e) => e === ""));
 };

 const validate = (values) => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // found value on internet 
    const phoneRegex = /^\d{10}$/; // this one too

    if (!values.username) {
      errors.username = "Please enter your first name";
    }
    if (!values.lastname) {
      errors.lastname = "Please enter your lastname";
    }
    if (!values.email) {
      errors.email = "Please enter Valid email address";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter Valid email address";
    }
    if (!values.phoneno) {
      errors.phoneno = "Please enter Valid number";
    } else if (!phoneRegex.test(values.phoneno)) {
      errors.phoneno = "Invalid phone number";
    }

    return errors;
 };

 return (
    <div id="formContainer">
      <div id="regStatus">{submit ? "Registration successful!" : ""}</div>
      <form id="regForm" onSubmit={handleSubmit}>
        <div>
          <input name="username"
            type="text"
            placeholder='First name'
            value={formValues.username}
            onChange={handleChange} />
        </div>
        <p>{formErrors.username}</p>
        <div>
          <input name="lastname"
            type="text" placeholder='Last name'
            value={formValues.lastname}
            onChange={handleChange} />
        </div>
        <p>{formErrors.lastname}</p>
        <div>
          <input name="email"
            type="text" placeholder='Email-id'
            value={formValues.email}
            onChange={handleChange} />
        </div>
        <p>{formErrors.email}</p>
        <div>
          <input name="phoneno"
            type="text" placeholder='Phone Number'
            value={formValues.phoneno}
            onChange={handleChange} />
        </div>
        <p>{formErrors.phoneno}</p>
        <div>
          <input id="register" type="submit" value='Register' />
        </div>
      </form>
      <footer>
        <p>Copyright &copy; 2022. All rights reserved.</p>
      </footer>
    </div>
 );
}

export default App;


