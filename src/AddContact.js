import React, { useContext, useState } from "react";
import Store from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddContact() {
  const { dispatch } = useContext(Store);
  const [contact, setContact] = useState("");

  function handleContactChange(e) {
    setContact(e.target.value);
  }

  function handleContactAdd() {
    dispatch({ type: "ADD_CONTACT", payload: contact });
    setContact("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleContactAdd();
  }

  return (
    <div className="card card-body mb-3">
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          className="input"
          value={contact}
          placeholder="Add Contact"
          onKeyUp={handleSubmitForm}
          onChange={handleContactChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleContactAdd}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
