import { Link } from 'react-router-dom';
import {} from '../styles/main.scss';
import about from '../assets/about.svg';
import aboutData from '../data/about.json';
import { useState } from 'react';
import { ChevronUp } from 'lucide-react';


function About() {

    const [openSections, setOpenSections] = useState([]); // On utilise un tableau

    const handleClick = (sectionId) => {
        if (openSections.includes(sectionId)) {
            setOpenSections(openSections.filter(id => id !== sectionId))
        } else {
            setOpenSections([...openSections, sectionId])
        }
    }


    return (
        <div className="about">
            <Link to="">
                <img src={about} alt="Image à propos"></img>
            </Link>
            <div className='about_content'>
                {aboutData.aboutSections.map((section) => {
                    return(
                    <div key={section.id} className='collapse-section'>
                        <div className='collapse-header' onClick={() => handleClick(section.id)}>
                            <h1>{section.title}</h1>
                            <ChevronUp className={`chevron ${openSections.includes (section.id) ? 'rotate' : ''}`} />
                        </div> 
                    {openSections.includes (section.id) &&(
                        <div className="collapse-content">
                        <p>{section.content}</p>
                        </div>
                    )}
                    </div>

                    )
                }

                )},


            </div>
        </div>
    );
}

export default About;
