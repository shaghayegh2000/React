import "./App.css";
import { useState } from "react";
import {AddContact , EditContact , ViewContact , Contacts , Contact , Navbar}  from './components';

const App = () => {

    const [contacts , setContacts] = useState([]);
    const [loading , setLoading] = useState(true);

    return (
        <div className="App">
            <Navbar/>
            <Contacts contacts={contacts} loading={loading}/>
        </div>
    );
};

export default App;
