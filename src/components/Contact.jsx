import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p>Feel free to reach me via email, LinkedIn, or social media!</p>
      <div className="contact-cards">
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:evelbinus27@gmail.com">evelbinus27@gmail.com</a>
        </div>
        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/evelyn-christine-4935a7292/" target="_blank">linkedin.com/in/evelyn-christine</a>
        </div>
        <div className="contact-card">
          <h3>GitHub</h3>
          <a href="https://github.com/evelyn576" target="_blank">github.com/evelyn576</a>
        </div>
        <div className="contact-card">
          <h3>WhatsApp</h3>
          <a href="https://wa.me/6289507933705" target="_blank">+62-895-0793-3705</a>
        </div>
        <div className="contact-card">
            <h3>Instagram</h3>
            <a href="https://instagram.com/evelyn.576" target="_blank">@evelyn.576</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;