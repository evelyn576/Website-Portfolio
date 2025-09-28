import React from "react";

function Portfolio() {
  const projects = [
  {
    title: "KnowYourHeartRisk",
    desc: "Streamlit app predicting heart attack risk using ML models.",
    link: "https://github.com/mewcurryy/KnowYourHeartRisk",
    image: "/images/heart.png"
  },
  {
    title: "FORSA",
    desc: "Academic learning platform, prototyped in Figma & Replit.",
    link: "https://github.com/SatrioHalim/project_HCI_10",
    image: "/images/forsa.png"
  },
  {
    title: "TechCheck",
    desc: "Web platform for e-waste management, device check tools, chatbot, and recycling map.",
    link: "https://github.com/leon65232/TechCheckv1",
    image: "/images/techcheck.png"
  },
  {
    title: "Weather Forecast",
    desc: "Real-time AI-based weather prediction using KNN & Naive Bayes.",
    link: "https://github.com/evelyn576/Weather-Forecast",
    image: "/images/weather.png"
  }
];

  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;