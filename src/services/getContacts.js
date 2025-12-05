import contacts from '../data/data_users';

function getContacts() {
    return contacts
}

function getContactById(contact_id) {

    const contact = contacts.find(contact => contact.id === contact_id);

    if (!contact) {
        return null;
    }else{
        return contact;
    }
}

export {getContacts, getContactById}