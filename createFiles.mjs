// filepath: c:\Users\l-boy\OneDrive\Bureau\Formation Dev Web OC\Projet 11\Kasa.github.io\createFiles.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du fichier actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dossier où les fichiers seront créés
const directoryPath = path.join(__dirname, 'src/Sass');

// Liste des noms de fichiers à créer

const fileNames = ['Header.scss', 'Footer.scss', 'CollapseBtn.scss', 'List.scss', 'Navbar.scss', 'RatingStars.scss', 'SlidingPicture.scss', 'Tags.scss', 'LayRoot.scss', 'Error404.scss' ];

// Contenu par défaut pour chaque fichier
const defaultContent = `// Contenu par défaut`;

// Crée le dossier s'il n'existe pas
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

// Crée chaque fichier avec le contenu par défaut
fileNames.forEach((fileName) => {
  const filePath = path.join(directoryPath, fileName);
  fs.writeFileSync(filePath, defaultContent, 'utf8');
  console.log(`Fichier créé : ${filePath}`);
});

console.log('Tous les fichiers ont été créés.');