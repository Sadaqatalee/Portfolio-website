
import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Sadaqat Alee</span><br/>Web Developer</h1>
          <p>
            I create beautiful, responsive websites and applications using modern web technologies. 
            Passionate about clean code and intuitive user experiences.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;