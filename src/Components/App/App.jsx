import { useState } from 'react'

import  './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import myContacts from '../../contacts.json'

// console.log(myContacts);


export default function App() {
 

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('my-contact');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return myContacts;
  });
  
  const [searchContact,setSearchContact] = useState('');
   const addContact = (newContact) => {
     setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
   };
  
  const foundСontacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact)=>contact.id!==contactId)
    }
      
    )
  }
  return (
    <div>

  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact} />
  <SearchBox value={searchContact} onSearch={ setSearchContact} />
  <ContactList contacts={foundСontacts} onDelete={deleteContact} />
</div>
  )
}