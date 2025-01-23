import {ChevronDown } from 'lucide-react';
import { useState } from 'react';

function Collapse({ title, content, icon: Icon = ChevronDown }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-section">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h1>{title}</h1>
        <Icon className={`chevron ${isOpen ? 'rotate' : ''}`} />
      </div>
      {isOpen && (
        <div className="collapse-content">
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