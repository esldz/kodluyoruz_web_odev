import React, { useEffect, useState } from 'react';
import List from "./List/index";
import Form from "./Form/index";
import {} from "./style.css";

function Contacts() {
    const[contacts, setContacts] = useState([
        {
            fullname:"Esmanur",
            phoneNumber:"1234532431"
        },
        {
            fullname:"Yıldız",
            phoneNumber:"63452423"
        },
        {
            fullname:"Ali",
            phoneNumber:"5321231"
        }
]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

  return (
    <div id='container'>
        Contacts
        <List  contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;