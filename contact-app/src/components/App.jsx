import React, { useEffect } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import './App.css'
import ContactList from './ContactList'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]); // take the all previos contacts and add the new contact 
  }
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //getting the stored data from the local storage and setContact to that data if exists
    if (retriveContacts) setContacts(retriveContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); // add this to localstorage
  }, [contacts])




  return (
    <div className='ui container'>
      <Header></Header>
      <AddContact addContactHandler={addContactHandler} ></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  )
}

export default App
