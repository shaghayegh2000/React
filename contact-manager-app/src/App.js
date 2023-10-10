import "./App.css";
import { useState } from "react";
import {AddContact , EditContact , ViewContact , Contacts , Contact , Navbar}  from './components';
import { Route , Routes , Navigate } from "react-router-dom";

const App = () => {

    const [contacts , setContacts] = useState([]);
    const [loading , setLoading] = useState(false);

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to="/contacts"/>}></Route>
                <Route path="/contacts" element={<Contacts contacts={contacts} loading={loading}/>}></Route>
                <Route path="/contacts/add" element={<AddContact/>}></Route>
                <Route path="/contacts/:contactId" element={<ViewContact/>}></Route>
                <Route path="/contacts/edit/:contactId" element={<EditContact/>}></Route>
            </Routes>
        </div>
    );
};

export default App;
