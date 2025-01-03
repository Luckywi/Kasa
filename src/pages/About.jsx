import { Link } from 'react-router-dom';
import {} from '../styles/main.scss';
import about from '../assets/about.svg';

function About() {
    return (
        <div className="about">
            <Link to="">
                <img src={about} alt="Image à propos"></img>
            </Link>
        </div>
    );
}

export default About;
