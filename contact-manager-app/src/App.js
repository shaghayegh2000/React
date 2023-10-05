import "./App.css";
import Contacts from "./components/Contact/Contacts";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {

    const [contacts , setContacts] = useState([]);

    return (
        <div className="App">
            <Navbar/>
            <Contacts contacts={contacts}/>
        </div>
    );
};

export default App;
