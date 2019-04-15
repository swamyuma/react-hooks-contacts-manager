import React, { useContext, useReducer } from "react";
import { render } from "react-dom";
import App from "./App";
import Store from "./Store";
import reducer from "./reducers";
import { usePersistedContext, usePersistedReducer } from "./usePersist";

import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function Index() {
  // create a global store to store the state
  const globalStore = useContext(Store);

  // `todos` will be a state manager to manage state
  const [state, dispatch] = useReducer(reducer, globalStore);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Header />
      <AddContact />
      <ContactList />
    </Store.Provider>
  );
}

render(<Index />, document.getElementById("root"));
