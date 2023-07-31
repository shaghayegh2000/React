import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';
import { Route, Routes, Navigate } from 'react-router-dom';
import AddContact from '../src/components/AddContact';
import ViewContact from '../src/components/ViewContact.jsx';
import EditContact from '../src/components/EditContact'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/contacts" />}>ّ</Route>
        <Route path='/contacts' element={<Contacts contacts={getContacts} loading={loading}/>}></Route>
        <Route path='/contacts/add' element={<AddContact />}></Route>
        <Route path='/contacts/:contactId' element={<ViewContact />}></Route>
        <Route path='/contacts/edit/:contactId' element={<EditContact />}></Route>
      </Routes>
      {/* <Contacts contacts={getContacts} loading={loading}/> */}
    </>
  )
}

export default App;


