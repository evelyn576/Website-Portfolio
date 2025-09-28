import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./styles/style.css";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
      <footer>© 2025 Evelyn Christine | All Rights Reserved</footer>
    </div>
  );
}

export default App;