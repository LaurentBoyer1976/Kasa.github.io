import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/Js/Layouts/Layout.jsx';
import Home from './src/Js/Pages/Home.jsx';
import About from './src/Js/Pages/About.jsx';
import Accommodations from './src/Js/Pages/Accommodations.jsx';
import Error from './src/Js/Pages/Error.jsx';
import './src/Css/App.css';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='accommodations/:id' element={<Accommodations />} />
        <Route path='404' element={<Error />} />
        <Route path='*' element={<Error />} />
      </Route> 
    </Routes>
  </Router>
);

export default AppRouter;

