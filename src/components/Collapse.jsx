import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

function Collapse({ title, content, Icon = ChevronDown }) {
  const [isOpen, setIsOpen] = useState(false); // isOpen nous dit si la section est ouverte (true) ou fermée (false)

  return (
    <div className="collapse-section">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}> {/* Quand on clique sur le header, ça ouvre ou ferme la section */}
        <h1>{title}</h1>
        <Icon className={`chevron ${isOpen ? 'rotate' : ''}`} />
      </div>
      {isOpen && (
        <div className="collapse-content"> {/* Si c'est ouvert, on affiche le contenu, si le contenue est un tableau on créee un paragraphe pour chaque élement sinon on affiche juste le contenue dans un paragraphe*/}
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;