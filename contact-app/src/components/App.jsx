import React from 'react'
import Header from './Header'
import AddContact from './AddContact'
import './App.css'
import ContactList from './ContactList'


function App() {


  return (
    <div>
      <Header></Header>
      <AddContact></AddContact>
      <ContactList></ContactList>
    </div>
  )
}

export default App
