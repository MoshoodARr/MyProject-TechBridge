// import logo from './logo.svg';
// import './App.css';
// import {useState} from "react";
// import Button from './components/Button';



import React from 'react'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';


const App = ({props}) => {
  return (
    <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App;
