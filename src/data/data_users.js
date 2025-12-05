const contacts = [
    {
        id : 1,
        name : "Alice Johnson",
        chatID: 1,
        avatar : "https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3383.jpg",
        status: "Online",
        messages: [
            {
            messageID: 1,
            author: "Alice Johnson",
            text : "Hey! How are you?",
            created_at : "10:30 AM",
            status_message: "- Sended"
        },
        {
            messageID: 2,
            author: "Alice Johnson",
            text : "Are we still on for lunch?",
            created_at : "10:32 AM",
            status_message: "- Sended"
        },
        {
            messageID: 3,
            author: "You",
            text : "Are we still on for lunch?",
            created_at : "10:32 AM",
            status_message: "- Sended"
        }
        ]
    },
    {
        id : 2,
        name : "Bob Smith",
        chatID: 2,
        avatar : "https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3383.jpg",
        status: "Offline",
        messages: [
            {
            messageID: 1,
            author: "Bob Smith",
            text : "Don't forget the meeting tomorrow.",
            created_at : "Yesterday",
            status_message: "- Sended"
        },
        {
            messageID: 2,
            author: "You",
            text : "Don't forget the meeting tomorrow.",
            created_at : "Yesterday",
            status_message: "- Sended"
        }
        ]
    },
    {
        id : 3,
        name : "Charlie Davis",
        chatID: 3,
        avatar : "https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3383.jpg",
        status: "Offline",
        messages: [
            
        ]
    }
]

export default contacts;