import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/Js/Layouts/Layout.jsx';
import Home from './src/Js/Pages/Home.jsx';
import About from './src/Js/Pages/About.jsx';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
      </Route> 
    </Routes>
  </Router>
);

export default AppRouter;

