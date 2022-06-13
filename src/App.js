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
       <div class="home">
        <div class="page-wrapper">
          <h1 class="d-none">Wolmart - Responsive Marketplace HTML Template</h1>
          <main class="main d-flex">
          <Sidebar />
          <Navbar />
          </main>
        </div>
        {/* <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About /> }></Route>
        </Routes> */}
       </div>
    </BrowserRouter>
  );
}

export default App;
