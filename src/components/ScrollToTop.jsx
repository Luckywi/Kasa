import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation(); // useLocation renvoie l'objet location qui représente l'URL actuelle

    useEffect(() => {
        window.scrollTo(0, 0); // Remonte la fenêtre tout en haut (coordonnées 0, 0)
    }, [location.pathname]); // Déclenche l'effet à chaque changement de route

    return null;
}

export default ScrollToTop;