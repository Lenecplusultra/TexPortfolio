import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

// Subtle floating particles for "alive" feel
const Particles = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${8 + i * 8}%`,
          animationDuration: `${10 + (i * 3.7) % 15}s`,
          animationDelay: `${(i * 2.3) % 12}s`,
          width: i % 3 === 0 ? '3px' : '2px',
          height: i % 3 === 0 ? '3px' : '2px',
          opacity: 0.4 + (i % 4) * 0.1,
        }}
      />
    ))}
  </div>
);

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 relative">
      <Particles />
      <Navbar />
      <div className="max-w-screen-xl mx-auto relative z-10">
        <Banner />
        <div style={{ backgroundColor: '#13151a' }} className="rounded-xl -mx-4 px-4">
          <Features />
        </div>
        <Projects />
        <div style={{ backgroundColor: '#13151a' }} className="rounded-xl -mx-4 px-4">
          <Resume />
        </div>
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
