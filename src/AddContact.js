import React, { useContext, useState } from "react";
import Store from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddContact() {
  const { dispatch } = useContext(Store);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  /* function handleContactChange(e) {
    setContact({ [e.target.name]: e.target.value });
  } */

  function handleContactAdd() {
    dispatch({ type: "ADD_CONTACT", payload: formData });
    setFormData({ name: "", email: "", phone: "" });
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (event.keyCode === 13) handleContactAdd();
    // console.log(contact);
  }

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { name, email, phone } = formData;

  return (
    <div className="card card-body mb-3">
      <div className="card-header">Add Contact</div>
      <form onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            autoComplete="off"
            type="text"
            className="form-control form-control-lg"
            placeholder="enter name..."
            name="name"
            value={name}
            onChange={e => updateFormData(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input
            autoComplete="off"
            type="email"
            className="form-control form-control-lg"
            placeholder="enter email..."
            name="email"
            value={email}
            onChange={e => updateFormData(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Phone</label>
          <input
            autoComplete="off"
            type="text"
            className="form-control form-control-lg"
            placeholder="enter phone..."
            name="phone"
            value={phone}
            onChange={e => updateFormData(e)}
          />
        </div>
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
