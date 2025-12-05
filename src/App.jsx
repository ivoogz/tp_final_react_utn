import { Routes, Route } from 'react-router-dom'
import Contactlist from './screens/contactList/contactList.jsx'


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
