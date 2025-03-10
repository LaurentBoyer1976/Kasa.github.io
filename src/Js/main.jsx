import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import '../Css/Index.css'; // Import du CSS supprimé car superflu
import Router from '../../Router.jsx'; // Chemin mis à jour pour refléter la position à la racine

createRoot(document.body).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
