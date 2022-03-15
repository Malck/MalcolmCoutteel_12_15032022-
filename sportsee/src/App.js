import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"; 
import Header from "../src/components/Header" ;
import Aside from "../src/components/Aside" ;
import Error from "./pages/Error"


function App() {
  return (
    <Router>

      <Header />
      <Aside />
      <Routes>

        <Route exact path="/" element={<Home />}/>

        <Route path="/*" element={<Error />}/>
          
      </Routes>

    </Router>
  );
}

export default App;
