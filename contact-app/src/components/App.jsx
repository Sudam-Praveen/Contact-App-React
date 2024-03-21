import React, { useEffect } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import './App.css'
import ContactList from './ContactList'
import { useState } from 'react'


function App() {
  const [contacts, setContact] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = (contact) => {
    console.log(contact);
    setContact([...contacts, contact]) // take the all previos contacts and add the new contact 
  }
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //getting the stored data from the local storage and setContact to that data if exists
    if (retriveContacts) setContact(retriveContacts);
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
