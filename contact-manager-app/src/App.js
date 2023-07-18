import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';

const App = () => {
  const [loading , setLoading] = useState(false);
  const [getContacts , setContacts] = useState([]);
  return (
    <>
      <Navbar/>
      <Contacts contacts={getContacts} loading={loading}/>
    </>
  )
}

export default App;


