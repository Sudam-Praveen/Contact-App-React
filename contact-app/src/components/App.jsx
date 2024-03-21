import React from 'react'
import Header from './Header'
import AddContact from './AddContact'
import './App.css'
import ContactList from './ContactList'
import { useState } from 'react'


function App() {
  const [contacts, setContact] = useState([]);
  
  const addContactHandler=(contact)=>{
    console.log(contact);
    setContact([...contacts,contact]) // take the all previos contacts and add the new contact 
  }

  return (
    <div className='ui container'>
      <Header></Header>
      <AddContact addContactHandler={addContactHandler} ></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  )
}

export default App
