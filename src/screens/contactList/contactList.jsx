import React, { useEffect, useEffectEvent, useState } from "react"
import { getContacts } from '../../services/getContacts.js'
import contacts from "../../data/data_users.js"
import { useParams } from "react-router-dom"
import Chatlist from "../../Components/ChatList/Chatlist.jsx"
import ChatDetail from "../../Components/ChatDetail/ChatDetail.jsx"
import CreateNewMessage from "../../Components/CreateNewMessage/CreateNewMessage.jsx"
import "./contactList.css"

function Contactlist() {

  const [contactsList, setContactsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [chatSelected, setChatSelect] = useState(null)
  const [messagesChat, setMessagesChat] = useState(null)
  const chatId = useParams()
  const fechaActual = new Date();




  //Para cargar la lista de contactos

  function loadContacts() {

    setLoading(true)


    setTimeout(() => {
      const contacts = getContacts()
      setContactsList(contacts)
      setLoading(false)
    }, 2000);


  }

  //Para crear un nuevo contacto

  function addNewContact(name) {

    const newContact = {
      id: contactsList.length + 1,
      name: name,
      chatID: contactsList.length + 1,
      avatar: "https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3383.jpg",
      status: "online",
      messages: []
    }

    setContactsList(
      (prev_state) => {
        return [...prev_state, newContact]
      }
    )
  }

  //Para crear un nuevo mensaje

  function addNewMessage(textValue) {


    const newMessage = {
      messageID: chatSelected.messages.length + 1,
      author: "You",
      text: textValue,
      created_at: fechaActual.toLocaleTimeString(),
      status_message: " - Sended"
    }

    setContactsList(
      (prev_state) => {
        return (prev_state.map(
          (chat) => {
            if (Number(chat.chatID) === Number(chatId.chatId)) {
              console.log(chat.chatID)
              chat.messages = [...chat.messages, newMessage]
            }
            return chat
          }
        ))
      }
    )



    setTimeout(() => {
      response()
    }, 2000);

  }

  function response() {
    const message = {
      messageID: chatSelected.messages.length + 1,
      author: chatSelected.name,
      text: '¡Hola! Esta es una respuesta automatica. Dentro de un rato te respondere.',
      created_at: fechaActual.toLocaleTimeString(),
      status_message: " - Sended"
    }

    setContactsList(
      (prev_state) => {
        return (prev_state.map(
          (chat) => {
            if (Number(chat.chatID) === Number(chatId.chatId)) {
              console.log(chat.chatID)
              chat.messages = [...chat.messages, message]
            }
            return chat
          }
        ))
      }
    )
  }

  //Para cargar el chat seleccionado

  function loadChat() {
    if (chatId) {


      const chatActual = contactsList.find(contacto => Number(contacto.chatID) === Number(chatId.chatId))
      setChatSelect(chatActual)



    }
  }



  useEffect(
    loadContacts,
    []
  )

  useEffect(() => {
    loadChat();
  }, [chatId]);






  return (
    <div className="container">
      {
        loading
          ? <span className="loading">Cargando lista de contactos...</span>
          : <div className="view">
              <Chatlist contactData={contactsList} addNewContact={addNewContact} />
              <div className="chatContent">
                <ChatDetail chatSelected={chatSelected} messagesChat={messagesChat} addNewMessage={addNewMessage} />
                {/* <CreateNewMessage addNewMessage={addNewMessage} inputData={chatSelected}/> */}
              </div>
          </div>
      }
    </div>
  )
}

export default Contactlist
