import React from "react";

function Home() {
  return (
    <div className="home">
      <img src="/images/profile.jpg" alt="Evelyn Christine" className="profile-pic" />
      <h2>Hi, I'm <span className="highlight">Evelyn Christine</span></h2>
      <p className="subtitle">Computer Science Student | Intelligent Systems</p>
      <p>
        Motivated to learn, grow, and collaborate in building impactful technology solutions.
      </p>
      <div className="buttons">
        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn">
          View CV
        </a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </div>
    </div>
  );
}

export default Home;