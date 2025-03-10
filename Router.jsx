import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/Js/Layouts/Layout';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="*" element={<Layout />} />
    </Routes>
  </Router>
);

export default AppRouter;

