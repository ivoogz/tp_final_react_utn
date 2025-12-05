import React from "react";
import CreateNewMessage from "../../Components/CreateNewMessage/CreateNewMessage.jsx"
import "./ChatDetail.css"

function ChatDetail({ chatSelected, addNewMessage }) {

    if (chatSelected == null) {
        return <p className="noMessages">No hay ningun chat seleccionado</p>;
    }

    return (
        <div className="chat">

            <div className="chatInfo">
                <h1>{chatSelected.name}</h1>
                <span>{chatSelected.status}</span>
            </div>

            <div className="chatMessagesList">
                {
                    chatSelected.messages.length === 0
                        ? <p className="noMessages">No hay ningun mensaje</p>
                        : <div className="messages">{chatSelected.messages.map((message, index) => (
                            <span className={message.author === 'You' ? "ownerMessage" : "message"} key={index}>
                                <span className="author">{message.author}</span>
                                <span>{message.text}</span>
                                <span>
                                    <span>{message.created_at}</span>
                                    <span>{message.status_message}</span>
                                </span>
                                {console.log(chatSelected.messages)}
                            </span>
                        ))}</div>
                }
            </div>

            <CreateNewMessage addNewMessage={addNewMessage} />

        </div>
    )
}

export default ChatDetail;