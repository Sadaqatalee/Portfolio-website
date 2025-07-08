
import React from 'react';
import ProjectCard from './ProjectCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Product Page",
      description: "A sleek and modern product page built with React and Tailwind CSS, featuring product listings, image sliders, filters, and a dynamic shopping cart. Designed with responsive layouts for a seamless experience on all devices. Simulates real-world e-commerce functionality with local storage for cart state.",
      image: `${process.env.PUBLIC_URL}/images/projects/hr-automation-system.jpg`,
      
    },
    {
      title: "Task Manager App",
      description: "A full-stack productivity tool developed using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, update, delete, and categorize tasks. Includes user authentication, real-time task status updates, and a responsive UI. Ideal for managing personal or team tasks.",
      image: `${process.env.PUBLIC_URL}/images/projects/task-manager.png`,
      
    },
    {
      title: "Weather Forecast App",
      description: "A lightweight and user-friendly weather app built with HTML, CSS, and vanilla JavaScript, using the OpenWeatherMap API. Users can search cities to view real-time weather data including temperature, humidity, and forecast icons. Includes error handling and loading states for better UX.",
      image: `${process.env.PUBLIC_URL}/images/projects/weather-forecasting.png`,
      
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;