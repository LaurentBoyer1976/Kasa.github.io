import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/Js/Layouts/Layout.jsx';
import Home from './src/Js/Pages/Home.jsx';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} /> 
      </Route> 
    </Routes>
  </Router>
);

export default AppRouter;

