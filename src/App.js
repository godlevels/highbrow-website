import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import FaqsPage from './pages/FaqsPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/courses" element={ <CoursesPage /> }/>
          <Route path="/services" element={ <ServicesPage /> }/>
          <Route path="/contact" element={ <FaqsPage /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
