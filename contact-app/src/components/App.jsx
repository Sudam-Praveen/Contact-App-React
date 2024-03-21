import React from 'react'
import Header from './Header'
import AddContact from './AddContact'
import './App.css'
import ContactList from './ContactList'


function App() {

  const contacts=[
    {
      id:'01',
      name:'Praveen',
      email:'sudam.p@gmail.com'
    },
    {
      id:'02',
      name:'Sudam',
      email:'sum.p@gmail.com'
    }

  ];
  
  return (
    <div className='ui container'>
      <Header></Header>
      <AddContact></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  )
}

export default App
