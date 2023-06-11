import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="conteneur_texte">
      <p>Copyright 2023 - Félix Boutin-Cousineau</p>
      <Link to="/">Retour à l'accueil</Link>
    </footer>
  );
};

export default Footer;
