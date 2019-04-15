import React, { useContext, useState } from "react";
import Store from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import TextInputGroup from "./Components/Layout/TextInputGroup";

//import validate from "./Components/Validation/ContactFormValidationRules";

export default function AddContact() {
  const { dispatch } = useContext(Store);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    errors: {}
  });
  /* function handleContactChange(e) {
    setContact({ [e.target.name]: e.target.value });
  } */

  function handleContactAdd() {
    const { name, email, phone, errors } = formData;

    if (name === "") {
      setFormData({
        errors: { name: "Enter a valid name", email: "", phone: "" }
      });
      return;
    }
    if (email === "") {
      setFormData({
        errors: { name: "", email: "Enter a valid email", phone: "" }
      });
      return;
    }
    if (phone === "") {
      setFormData({
        errors: { name: "", email: "", phone: "Enter a valid phone" }
      });
      return;
    }
    dispatch({ type: "ADD_CONTACT", payload: formData });
    setFormData({
      name: "",
      email: "",
      phone: "",
      errors: { name: "", email: "", phone: "" }
    });
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (event.keyCode === 13) handleContactAdd();
    // console.log(contact);
  }

  const updateFormData = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const { name, email, phone, errors } = formData;

  const inputField = [
    ["Name", "name", "text", "Enter name...", name, errors.name],
    ["Email", "email", "email", "Enter email...", email, errors.email],
    ["Phone", "phone", "text", "Enter phone...", phone, errors.phone]
  ];

  return (
    <div className="container card card-body mb-3 ml-6 mr-6">
      <div className="card-header">Add Contact</div>
      <form onSubmit={handleSubmitForm}>
        {inputField.map(field => {
          return (
            <TextInputGroup
              label={field[0]}
              name={field[1]}
              type={field[2]}
              placeholder={field[3]}
              value={field[4]}
              onChange={e => updateFormData(e)}
              error={field[5]}
            />
          );
        })}

        <div className="input-group-append">
          <button
            className="btn btn-block btn-primary"
            onClick={handleContactAdd}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
