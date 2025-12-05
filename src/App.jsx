import { Routes, Route } from 'react-router-dom'
import Chatscreen from './screens/chatScreen/chatScreen'
import Contactlist from './screens/contactList/contactList'
import ChatDetail from './Components/ChatDetail/ChatDetail'

function App() {

  return (

    <div>


      <Routes>
        <Route path='/' element={<Contactlist />} />
        <Route path='/chat/' element={<Contactlist />} />
        <Route path='/chat/:chatId' element={<Contactlist />} />
      </Routes>

    </div>




  )
}

export default App
