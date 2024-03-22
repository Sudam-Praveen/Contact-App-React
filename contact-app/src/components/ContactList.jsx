import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
    
    
    const deleteHandler = (id)=>{
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard  contact={contact} clickHandler={deleteHandler}></ContactCard>
        )
    })


    return (
        <div className="ui celled list" >
            {renderContactList}

        </div>
    )
}