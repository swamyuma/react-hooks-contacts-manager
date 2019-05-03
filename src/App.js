import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import ContactsContext from "./Store";

function Header({ branding }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark narvbar-danger bg-danger py-0 mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Contact({ contact, index, deleteContact }) {
  const [hidden, setHidden] = useState(false);

  const { name, email, phone } = contact;

  return (
    <div>
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() => setHidden(!hidden)}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", color: "red", float: "right" }}
            onClick={() => deleteContact(index)}
          />
        </h4>
        {hidden ? (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function ContactForm({ addContact }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    console.log(value);

    if (!value) return;
    addContact(value);
    setValue("");
  };

  return (
    <div className="card card-body mb-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Add Contact"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

function App() {
  const [contacts, setContacts] = useContext(ContactsContext);

  console.log(contacts);
  const addContact = name => {
    const newContact = [...contacts, { name }];
    setContacts(newContact);
  };

  const deleteContact = index => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="app">
      <Header branding="Contact Manager" />
      <div className="container">
        <div className="contact-list">
          {contacts.map((contact, index) => (
            <Contact
              key={index}
              index={index}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
          <ContactForm addContact={addContact} />
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default App;
