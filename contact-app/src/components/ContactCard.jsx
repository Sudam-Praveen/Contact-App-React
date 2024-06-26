import React from "react";
import user from "../images/user.png"
import { Link } from 'react-router-dom'

export default function ContactCard(props) {

    const { id, name, email } = props.contact;

    return (
        <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <div style={{ display: 'flex', alignItems: 'center' }}>

                <img className="ui avatar image" src={user} alt="user" />
                <div className="content" style={{ marginLeft: '10px' }}>
                    
                    <Link to={`/contact/${id}`}>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>

                </div>

            </div>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }} onClick={() => props.clickHandler(id)}>
            </i>
        </div>
    )
}