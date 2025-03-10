import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../Css/index.css';
import Router from '../../Router.jsx'; // Chemin mis à jour pour refléter la position à la racine

createRoot(document.body).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
