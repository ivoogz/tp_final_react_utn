import React from "react";
import "./CreateNewMessage.css"

function CreateNewMessage({ addNewMessage, chatSelected }) {

    const newMessage = (event) => {
        event.preventDefault();
        const formulario = event.target;
        const textValue = formulario.message.value;

        formulario.reset()

        addNewMessage(textValue)
    }

    return (
        <div className="inputMessage">
            <form onSubmit={newMessage}>
                <div>
                    <input id='message' name='message' type="text" placeholder='Haz click para escribir un mensaje...' />
                </div>
                <button type='submit'>Mandar mensaje</button>
            </form>
        </div>
    )
}

export default CreateNewMessage;