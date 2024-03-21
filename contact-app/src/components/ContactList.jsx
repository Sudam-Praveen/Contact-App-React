import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
    console.log(props.contacts[0].name);

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}></ContactCard>
        )
    })


    return (
        <div className="ui celled list" >
            {renderContactList}

        </div>
    )
}