import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from '../../Router.jsx'; // Chemin mis à jour pour refléter la position à la racine

createRoot(document.getElementById('root')).render( // Monte l'application dans l'élément avec l'id 'root'
  <StrictMode>
    <Router />
  </StrictMode>,
);
