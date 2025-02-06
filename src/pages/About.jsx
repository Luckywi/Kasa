import about from '../assets/about.svg';
import aboutData from '../data/about.json';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import { ChevronUp } from 'lucide-react';

function About() {
  return (
    <div className="about">
      <Banner
        image={about}
        brightness={70}
      />
      <div className='about_content'>
        {aboutData.aboutSections.map((section) => (
          <Collapse
            key={section.id}
            title={section.title}
            content={section.content}
            icon={ChevronUp}
          />
        ))}
      </div>
    </div>
  );
}

export default About;