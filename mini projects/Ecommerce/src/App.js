import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
            </Routes>
        </div>
    );
};

export default App;








