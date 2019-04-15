import uuid from "uuid";

export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_VIEW": {
      return {
        contacts: state.contacts.map(contact => {
          if (contact.id !== action.payload) {
            return contact;
          }
          return {
            ...contact,
            hidden: !contact.hidden
          };
        })
      };
    }
    case "ADD_CONTACT": {
      const newContact = {
        id: uuid.v4(),
        name: action.name,
        email: action.email,
        phone: action.phone
      };
      console.log(newContact);
      return {
        contacts: [...state.contacts, newContact]
      };
    }
    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
}
