
import React from 'react';

const ProjectCard = ({ title, description, image, links }) => {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img 
          src={image} 
          alt={title} 
          className="project-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
          }}
        />
        <div className="project-image-fallback">
          {title.split(' ').map(word => word[0]).join('')}
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      
      </div>
    </div>
  );
};

export default ProjectCard;