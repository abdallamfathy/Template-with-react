 import './App.css';
import React , {Component} from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
 import Index from "./Components/Index"
import Navbar from "./Components/Navbar"
 import Contact from "./Components/Contact";

class App extends Component {

    render() {
        return (

            <BrowserRouter>
                <Navbar/>
                <Routes>


                        <Route path="/" element={<Index />}/>
                        <Route path="/contact" element={<Contact />}/>
            </Routes>

            </BrowserRouter>
        );
    }

}

export default App;
