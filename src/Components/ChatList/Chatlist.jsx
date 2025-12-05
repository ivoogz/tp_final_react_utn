import React, { useEffect, useState } from "react"
import {getContacts} from '../../services/getContacts'
import AddNewContact from "../AddNewContact/AddNewContact"
import  contacts from "../../data/data_users"
import { Link } from "react-router-dom"
import './Chatlist.css';

function Chatlist({contactData, addNewContact}) {

  return (
    <div className="chatItem">
            <h2>Contactos</h2>
        {
            contactData.map((contact) => {
                return(
                <Link to={'/chat/' + contact.id} key={contact.id} className="contacts">
                    <img src={contact.avatar} alt={contact.name}/>
                    <h3>{contact.name}</h3>
                    <p>{contact.status}</p>
                </Link>
                )
            })
        }


        <AddNewContact addNewContact={addNewContact} />
      

    </div>
  )
}

export default Chatlist
