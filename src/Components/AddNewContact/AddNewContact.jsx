import React from 'react'
import './AddNewContact.css'

function AddNewContact({ addNewContact }) {

    const newContactSubmit = (event) => {
        event.preventDefault();
        const formulario = event.target;
        const nameValue = formulario.name.value;

        formulario.reset()

        addNewContact(nameValue)
    }

    return (
        <form className='formUser' onSubmit={newContactSubmit}>
            <div>
                <label htmlFor="name">Ingresá el nombre del nuevo contacto:</label>
                <input id='name' name='name' type="text" placeholder='Ejemplo: Pepito' />
            </div>
            <button type='submit'>Agregar contacto</button>
        </form>
    )
}

export default AddNewContact
