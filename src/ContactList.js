import React, { useState, useContext } from "react";
import Store from "./Store";

export default function ContactList({ contact, index }) {
  const { state, dispatch } = useContext(Store);

  //const [state, dispatch] = useReducer(contactsReducer, contacts);

  return (
    <div className="container card card-body mb-3 ml-6 mr-6">
      <div className="card-header">Contacts</div>
      {state.contacts.map(contact => {
        const { id, name, email, phone, hidden } = contact;
        return (
          <div className="card card-body mb-3 ml-6 mr-6">
            <h4>
              {name}{" "}
              <i
                onClick={() => dispatch({ type: "TOGGLE_VIEW", payload: id })}
                className="fas fa-sort-down"
                style={{ cursor: "pointer" }}
              />
              <i
                className="fas fa-times"
                style={{ cursor: "pointer", color: "red", float: "right" }}
                onClick={() =>
                  dispatch({ type: "REMOVE_CONTACT", payload: id })
                }
              />
            </h4>
            {hidden ? (
              <ul className="list-group">
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
