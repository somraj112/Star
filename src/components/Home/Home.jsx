
import './Home.css'
import React, { useEffect, useRef, useState } from 'react';
import video from "../../assets/video.mp4";
import LostFoundImage from '../../assets/LostFound.png';
import Notes from '../../assets/Notes.png';
import Events from '../../assets/Events.png';
import Community from '../../assets/Community.png';
import Privicy from '../../assets/Privicy.png';
import Fast from '../../assets/Fast.jpg';
import Logo from '../../assets/Logo.png';

import Header from '../Header/Header';
import SplashCursor from '../SplashCursor/SplashCursor';
const UniLyfeLandingPage = () => {
  const neuralNetworkRef = useRef(null);
  const codeRainRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

  // Neural Network Animation
  const createNeuralNetwork = () => {
    const container = neuralNetworkRef.current;
    if (!container) return;

    const nodes = [];
    
    // Create nodes
    for (let i = 0; i < 10; i++) {
      const node = document.createElement('div');
      node.className = 'neural-node';
      node.style.left = Math.random() * 100 + '%';
      node.style.top = Math.random() * 100 + '%';
      node.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(node);
      nodes.push({
        element: node,
        x: parseFloat(node.style.left),
        y: parseFloat(node.style.top)
      });
    }
    
    // Create connections between nearby nodes
    nodes.forEach((nodeA, i) => {
      nodes.forEach((nodeB, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(nodeA.x - nodeB.x, 2) + 
            Math.pow(nodeA.y - nodeB.y, 2)
          );
          
          if (distance < 25) {
            const connection = document.createElement('div');
            connection.className = 'neural-connection';
            
            const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x);
            const length = distance * window.innerWidth / 100;
            
            connection.style.left = nodeA.x + '%';
            connection.style.top = nodeA.y + '%';
            connection.style.width = length + 'px';
            connection.style.transform = `rotate(${angle}rad)`;
            connection.style.animationDelay = Math.random() * 4 + 's';
            
            container.appendChild(connection);
          }
        }
      });
    });
  };

  // Code Rain Effect
  const createCodeRain = () => {
    const container = codeRainRef.current;
    if (!container) return;

    const codeSnippets = [
      "Student Hub",
      "Campus Life",
      "Community",
      "Productivity",
      "Networking",
      "Events",
      "Opportunities",
      "Collaboration",
      "Growth"
    ];
    
    const createCodeLine = () => {
      const line = document.createElement('div');
      line.className = 'code-line';
      line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      line.style.left = Math.random() * 100 + '%';
      line.style.animationDuration = (Math.random() * 4 + 4) + 's';
      line.style.animationDelay = Math.random() * 2 + 's';
      
      container.appendChild(line);
      
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, 8000);
    };
    
    // Create initial lines
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createCodeLine(), i * 500);
    }
    
    // Continue creating lines
    const interval = setInterval(createCodeLine, 1500);
    return () => clearInterval(interval);
  };

  // Particle System
  const createParticles = () => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      particlesContainer.appendChild(particle);
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
    elements.forEach(element => {
      if (element.id) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Initialize animations
  useEffect(() => {
    createParticles();
    createNeuralNetwork();
    const cleanupCodeRain = createCodeRain();

    // Neural node movement enhancement
    const nodeInterval = setInterval(() => {
      document.querySelectorAll('.neural-node').forEach((node) => {
        const randomY = Math.random() * 5 - 2.5;
        const randomX = Math.random() * 5 - 2.5;
        node.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        setTimeout(() => {
          node.style.transform = 'translate(0, 0)';
        }, 1000);
      });
    }, 4000);

    return () => {
      clearInterval(nodeInterval);
      if (cleanupCodeRain) cleanupCodeRain();
    };
  }, []);

  const features = [
    {
      icon: <img src={Community} alt="Community" />,
      title: 'Community First',
      description: 'Built by students, for students. Connect with peers who share your interests and academic goals.'
    },
    {
      icon: <img src={Privicy} alt="Secure & Privicy" />,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security. Only verified students can join your campus.'
    },
    {
      icon: <img src={Fast} alt="Fast" />,
      title: 'Lightning Fast',
      description: 'Optimized for mobile and desktop. Get answers and connections in milliseconds, not minutes.'
    }
  ];

  const introCards = [
    {
      icon: <img src={LostFoundImage} alt="Lost & Found" />,      
      title: 'Lost & Found',
      description: 'Never lose track of your belongings again. Our smart matching system reunites you with your items.'
    },
    {
      icon: <img src={Notes} alt="Notes" />,
      title: 'Notes Hub',
      description: 'Share knowledge, ace your exams. Collaborative study materials at your fingertips.'
    },
    {
      icon: <img src={Events} alt="Events" />,
      title: 'Events',
      description: 'Stay connected with campus happenings. Discover parties, workshops, and social gatherings.'
    }
  ];

  return (
    <div className="unilyfe-landing">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      {/* Background Effects */}
      <div className="bg-effects"></div>
      
      {/* Particles */}
      <div className="particles" id="particles"></div>
      
      <Header/>
      
      {/* Hero Section */}
      <section className="hero">
        {/* Neural Network Animation */}
        <div className="neural-network" ref={neuralNetworkRef}></div>
        
        {/* Holographic Interface */}
        <div className="holo-interface">
          <div className="holo-circle"></div>
          <div className="holo-circle"></div>
          <div className="holo-circle"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="geometric-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        {/* Code Rain Effect */}
        <div className="code-rain" ref={codeRainRef}></div>
        
        {/* Data Streams */}
        <div className="data-stream" style={{left: '20%', animationDelay: '0s'}}></div>
        <div className="data-stream" style={{left: '80%', animationDelay: '1s'}}></div>
        <div className="data-stream" style={{left: '35%', animationDelay: '2s'}}></div>
        <div className="data-stream" style={{left: '65%', animationDelay: '3s'}}></div>
        
        <h1 className="hero-title">UniLyfe</h1>
        <p className="hero-subtitle">
          Your complete university ecosystem. Connect, share, discover and thrive in your academic journey with the ultimate student hub.
        </p>
      </section>
      {/* Video */}
      <div className='flex justify-center'>
      <video controls autoPlay muted loop width="70%" className="videoPlayer" src={video}></video>
      </div>
      
      {/* Intro Section */}
      <section className="section">
        <h2 className={`section-title fade-in-up ${isVisible.introTitle ? 'visible' : ''}`} id="introTitle">
          Discover Campus Life
        </h2>
        <div className="intro-cards">
          {introCards.map((card, index) => (
            <div 
              key={index}
              className={`glass-card intro-card ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              } ${isVisible[`intro-${index}`] ? 'visible' : ''}`}
              id={`intro-${index}`}
            >
              <div className="intro-card-content">
                <div className="intro-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section">
        <h2 className={`section-title fade-in-up ${isVisible.featuresTitle ? 'visible' : ''}`} id="featuresTitle">
          Powerful Features
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card feature-card fade-in-up ${isVisible[`feature-${index}`] ? 'visible' : ''}`}
              id={`feature-${index}`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Story Section */}
      <section className="section">
        <h2 className={`section-title fade-in-up ${isVisible.storyTitle ? 'visible' : ''}`} id="storyTitle">
          Why UniLyfe?
        </h2>
        <div className="story-content">
          <div className={`story-image slide-in-left ${isVisible.storyImage ? 'visible' : ''}`} id="storyImage">
            <img src={Logo} alt="Logo" />
          </div>
          <div className={`story-text slide-in-right ${isVisible.storyText ? 'visible' : ''}`} id="storyText">
            <p>University life is complex, exciting, and sometimes overwhelming. UniLyfe was born from the simple idea that students shouldn't have to navigate this journey alone.</p>
            <br />
            <p>We're not just another app – we're your digital campus companion. From finding that perfect study group to discovering the next big campus event, UniLyfe brings your university community together in ways that matter.</p>
            <br />
            <p>Join thousands of students who've already made UniLyfe their go-to platform for everything university-related.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
<section className="cta">
  <div className={`glass-card cta-card fade-in-up ${isVisible.ctaCard ? 'visible' : ''}`} id="ctaCard">
    <h2 className="cta-heading">Ready to Transform Your Campus Experience?</h2>
    <p className="cta-text">
      Join the future of student life. Connect, discover, and thrive with your university community.
    </p>
    <button className="cta-button">Join Now - It's Free</button>
  </div>
</section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
          <a href="#">Campus Partners</a>
        </div>
        <p>&copy; 2025 UniLyfe. Empowering student communities worldwide.</p>
      </footer>
      

    </div>
  );
};

export default UniLyfeLandingPage;