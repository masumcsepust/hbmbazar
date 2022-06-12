import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
       <Navbar />
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About /> }></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
