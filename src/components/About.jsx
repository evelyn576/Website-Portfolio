import React from "react";

function About() {
  return (
    <div className="about">
      <h2>Curriculum Vitae</h2>
      <div className="cv-section">
        <h3>About Me</h3>
        <p>
          I am a Computer Science student at Bina Nusantara University specializing in Intelligent System, 
          who is eager to learn and explore new experiences. I am motivated to improve my skills, open to 
          challenges, and ready to collaborate with others in both academic and professional environments.
        </p>
      </div>
      <div className="cv-section">
        <h3>Honors & Awards</h3>
        <ul>
          <li>Presenter & Author – ICORIS 2025</li>
          <li>Certificate of Organizational Committee - Certificate as Events</li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Work-Related Experience</h3>
        <ul>
          <li>
            <b>HISHOT 2025</b> - Sponsorship Division | March 2025 – Present <br />
          </li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Organizational Experience</h3>
        <ul>
          <li>
            <b>Himpunan Mahasiswa Teknik Informatika (HIMTI)</b> – Education Division | November 2024 – Present <br />
          </li>
          <li>
            <b>Bina Nusantara Computer Club (BNCC)</b> – Back-End Division | November 2023 – July 2024 <br />
          </li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Education</h3>
        <ul>
          <li><b>Bina Nusantara University</b> – Computer Science (Specialization in Intelligent Systems) | 2023 – Present</li>
          <li><b>SMA Citra Kasih</b> – Mathematics & Science | 2020 – 2023</li>
          <li><b>SMP Citra Kasih</b> | 2017 – 2020</li>
          <li><b>SD Citra Kasih</b> | 2011 – 2017</li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Skills</h3>
        <p><b>Programming Languages:</b> C, Python, Java, JavaScript, HTML, CSS, MySQL, Laravel, Streamlit</p>
        <p><b>Tools & Design:</b> Figma, GitHub, Canva</p>
        <p><b>Soft Skills:</b> Leadership, Critical Thinking, Teamwork, Communication</p>
      </div>
      <div className="cv-section">
        <h3>Languages</h3>
        <ul>
          <li>Indonesian – Native</li>
          <li>English – Fluent</li>
          <li>Mandarin – Advanced</li>
        </ul>
      </div>
      <div className="cv-section">
        <h3>Projects</h3>
        <ul>
          <li>Web Development</li>
          <li>AI Project for Natural Language Processing, Machine Learning, Deep Learning</li>
        </ul>
      </div>
    </div>
  );
}

export default About;