import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaSass, FaGit, FaMobileAlt, FaPaintBrush 
} from 'react-icons/fa';

const About = () => {
  const skills = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaSass />, name: 'node js' },
    { icon: <FaGit />, name: 'Git' },
    { icon: <FaMobileAlt />, name: 'Responsive Design' },
    { icon: <FaPaintBrush />, name: 'UI/UX Design' }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Web Developer</h3>
            <p>
              I’m a passionate web developer with a strong foundation in front-end and back-end technologies. I specialize in building responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, React, and Node.js. With a keen eye for design and a focus on performance, I turn ideas into functional, visually appealing digital experiences.
            </p>
            <p>
              My approach combines technical proficiency with an eye for design, ensuring 
              that every project I work on not only functions flawlessly but also provides 
              an exceptional user experience.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <div className="skill" key={index}>
                  {skill.icon} {skill.name}
                </div>
              ))}
            </div>
          </div>
          <div className="about-img">
            <div className="about-img-content">
              {/* Using image from public folder */}
              <img 
                src={`${process.env.PUBLIC_URL}/images/profile.png`} 
                alt="sad photo" 
                className="profile-image" 
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.style.display = 'none'; // Hide broken image
                  // Show fallback text
                  const fallback = document.createElement('div');
                  fallback.className = 'image-fallback';
                  fallback.innerHTML = '<span>N</span>';
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;