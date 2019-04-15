import React from "react";
import uuid from "uuid";

const Store = React.createContext({
  contacts: [
    {
      id: uuid.v4(),
      name: "Taversy Media",
      email: "traversy@gmail.com",
      phone: "111-111-1111",
      hidden: false
    },
    {
      id: uuid.v4(),
      name: "Designer Course",
      email: "designer@gmail.com",
      phone: "222-222-2222",
      hidden: false
    },
    {
      id: uuid.v4(),
      name: "Code Realm",
      email: "realm@gmail.com",
      phone: "333-333-3333",
      hidden: false
    },
    {
      id: uuid.v4(),
      name: "Acade Mind",
      email: "mind@gmail.com",
      phone: "444-444-4444",
      hidden: false
    }
  ]
});

export default Store;
