import React from "react";

import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";


const createCard = (contact) => {
  return (<Card
    key={contact.id}
    id={contact.id}
    name={contact.name}
    image={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
  />
  )
};

const App = () => {
  console.log(contacts)
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img="https://pbs.twimg.com/profile_images/1263370301678555137/16NYkZv4_400x400.jpg"
      />
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        image={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
