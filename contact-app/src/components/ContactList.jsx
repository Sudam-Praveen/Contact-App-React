import React from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom'

export default function ContactList(props) {


    const deleteHandler = (id) => {
        props.getContactId(id);
    };

    
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteHandler}></ContactCard>
        )
    })


    return (
        <div>
            <div className="main" style={{ display: 'flex', justifyContent: 'space-between',marginTop:'50px' }}>
            <h2>Contact List</h2>
            <div>
                <Link to="/add">
                <button className="ui button blue">Add Contact</button>   {/* Adding link to the Addcontact using liknk */}
                </Link>
               
            </div>

            </div>
            
            <div className="ui celled list">{renderContactList}</div>

        </div>

    )
}