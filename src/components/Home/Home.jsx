// import React from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import MainContent from "../mainContent/MainContent";
// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-900">
//       <Header />
//       <main className="flex-grow flex items-center justify-center">
//         <MainContent />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
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
      icon: '🔍',
      title: 'Smart Search',
      description: 'Find anything on campus instantly with our AI-powered search engine that understands student life.'
    },
    {
      icon: '🤝',
      title: 'Community First',
      description: 'Built by students, for students. Connect with peers who share your interests and academic goals.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security. Only verified students can join your campus.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for mobile and desktop. Get answers and connections in milliseconds, not minutes.'
    }
  ];

  const introCards = [
    {
      title: 'Lost & Found',
      description: 'Never lose track of your belongings again. Our smart matching system reunites you with your items.'
    },
    {
      title: 'Marketplace',
      description: 'Buy, sell, and trade with fellow students. From textbooks to tech, find everything you need.'
    },
    {
      title: 'Notes Hub',
      description: 'Share knowledge, ace your exams. Collaborative study materials at your fingertips.'
    },
    {
      title: 'Events',
      description: 'Stay connected with campus happenings. Discover parties, workshops, and social gatherings.'
    }
  ];

  return (
    <div className="unilyfe-landing">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          background: #0a0a0a;
          color: #ffffff;
          overflow-x: hidden;
          line-height: 1.6;
        }
        
        .unilyfe-landing {
          background: #0a0a0a;
          color: #ffffff;
          overflow-x: hidden;
        }
        
        /* Background Effects */
        .bg-effects {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(ellipse at center, rgba(147, 51, 234, 0.1) 0%, rgba(0, 0, 0, 0.8) 70%);
        }
        
        .bg-effects::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
          animation: gradientShift 20s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        /* Particles */
        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(147, 51, 234, 0.6);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        /* Glassmorphism Base */
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
        }
        
        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(219, 39, 119, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: inherit;
        }
        
        .glass-card:hover::before {
          opacity: 1;
        }
        
        .glass-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px rgba(147, 51, 234, 0.3);
          border-color: rgba(147, 51, 234, 0.3);
        }
        
        /* Navigation */
        .nav {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          padding: 1rem 2rem;
          border-radius: 2rem;
          background: rgba(10, 10, 10, 0.8);
          
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: navSlideIn 1s ease-out 0.5s both;
          box-shadow: 0 0 25px #8b5cf6; /* shadow-[0_0_25px_#8b5cf6] */
          backdrop-filter: blur(16px);
        }
        
        @keyframes navSlideIn {
          from { transform: translateX(-50%) translateY(-100px); opacity: 0; }
          to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        
        .nav-items {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 25px;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .nav-btn.primary {
          background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
        }
        
        .nav-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.6);
        }
        
        .nav-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        /* Hero Section */
        .hero {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        /* Animated Neural Network Background */
        .neural-network {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .neural-node {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(147, 51, 234, 0.8);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.6);
          animation: nodeGlow 3s ease-in-out infinite alternate;
        }
        
        @keyframes nodeGlow {
          from { box-shadow: 0 0 10px rgba(147, 51, 234, 0.6); }
          to { box-shadow: 0 0 20px rgba(147, 51, 234, 1); }
        }
        
        .neural-connection {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.5), transparent);
          transform-origin: left center;
          animation: connectionPulse 4s ease-in-out infinite;
        }
        
        @keyframes connectionPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        /* Morphing Geometric Shapes */
        .geometric-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .shape {
          position: absolute;
          border: 1px solid rgba(147, 51, 234, 0.3);
          animation: morphShape 15s ease-in-out infinite;
        }
        
        .shape:nth-child(1) {
          top: 20%;
          left: 10%;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(219, 39, 119, 0.1));
          border-radius: 20px;
          animation-delay: 0s;
        }
        
        .shape:nth-child(2) {
          top: 60%;
          right: 15%;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(219, 39, 119, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: 50%;
          animation-delay: 5s;
        }
        
        .shape:nth-child(3) {
          bottom: 20%;
          left: 20%;
          width: 120px;
          height: 60px;
          background: linear-gradient(90deg, rgba(147, 51, 234, 0.1), rgba(219, 39, 119, 0.1));
          border-radius: 30px;
          animation-delay: 10s;
        }
        
        @keyframes morphShape {
          0%, 100% { transform: rotate(0deg) scale(1); border-radius: 20px; }
          25% { transform: rotate(90deg) scale(1.2); border-radius: 50%; }
          50% { transform: rotate(180deg) scale(0.8); border-radius: 30px; }
          75% { transform: rotate(270deg) scale(1.1); border-radius: 10px; }
        }
        
        /* Animated Code Rain */
        .code-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }
        
        .code-line {
          position: absolute;
          color: rgba(147, 51, 234, 0.4);
          font-family: 'Courier New', monospace;
          font-size: 18px;
          white-space: nowrap;
          animation: codeFlow 8s linear infinite;
        }
        
        @keyframes codeFlow {
          from { 
            transform: translateY(-100px); 
            opacity: 0; 
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          to { 
            transform: translateY(100vh); 
            opacity: 0; 
          }
        }
        
        /* Hero Text Animations */
        .hero-title {
          font-size: 5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #e879f9 50%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          animation: titleReveal 2s ease-out forwards;
          text-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
          opacity: 0;
          transform: translateY(50px) scale(0.8);
        }
        
        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
            filter: blur(20px);
          }
          50% {
            opacity: 0.8;
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: #a1a1aa;
          margin-bottom: 3rem;
          max-width: 600px;
          animation: subtitleSlide 2s ease-out 0.5s forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes subtitleSlide {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Holographic Interface Elements */
        .holo-interface {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .holo-circle {
          position: absolute;
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 50%;
          animation: holoRotate 20s linear infinite;
        }
        
        .holo-circle:nth-child(1) {
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          margin: -150px 0 0 -150px;
          border-top-color: rgba(147, 51, 234, 0.6);
          animation-duration: 15s;
        }
        
        .holo-circle:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 500px;
          height: 500px;
          margin: -250px 0 0 -250px;
          border-right-color: rgba(219, 39, 119, 0.6);
          animation-duration: 25s;
          animation-direction: reverse;
        }
        
        .holo-circle:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 700px;
          height: 700px;
          margin: -350px 0 0 -350px;
          border-bottom-color: rgba(147, 51, 234, 0.4);
          animation-duration: 30s;
        }
        
        @keyframes holoRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Data Stream Visualization */
        .data-stream {
          position: absolute;
          width: 2px;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            rgba(147, 51, 234, 0.8) 50%, 
            transparent 100%);
          animation: dataFlow 3s ease-in-out infinite;
        }
        
        @keyframes dataFlow {
          0%, 100% { 
            height: 0;
            top: 50%;
          }
          50% { 
            height: 200px;
            top: calc(50% - 100px);
          }
        }
        
        /* Sections */
        .section {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #ffffff 0%, #e879f9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
          border-radius: 2px;
        }
        
        /* Intro Section */
        .intro-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        
        .intro-card {
          position: relative;
          height: 300px;
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
        }
        
        .intro-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 25px 60px rgba(147, 51, 234, 0.4);
        }
        
        .intro-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        }
        
        .intro-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        
        .intro-card p {
          color: #a1a1aa;
          font-size: 0.9rem;
        }
        
        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        
        .feature-card {
          text-align: center;
          padding: 3rem 2rem;
          position: relative;
        }
        
        .feature-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 2rem;
          background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          animation: iconPulse 3s ease-in-out infinite;
        }
        
        @keyframes iconPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8); }
        }
        
        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .feature-card p {
          color: #a1a1aa;
          line-height: 1.6;
        }
        
        /* Story Section */
        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-top: 4rem;
        }
        
        .story-image {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: #9333ea;
        }
        
        .story-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #d1d5db;
        }
        
        /* CTA Section */
        .cta {
          text-align: center;
          padding: 6rem 2rem;
          background: rgba(147, 51, 234, 0.05);
          margin: 4rem 0 0 0;
        }
        
        .cta-card {
          max-width: 600px;
          margin: 0 auto;
          padding: 4rem 3rem;
        }
        
        .cta-button {
          display: inline-block;
          padding: 1.5rem 3rem;
          background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(147, 51, 234, 0.4);
          margin-top: 2rem;
          border: none;
          cursor: pointer;
        }
        
        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(147, 51, 234, 0.6);
        }
        
        /* Footer */
        .footer {
          padding: 3rem 2rem;
          text-align: center;
          color: #6b7280;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #9333ea;
        }
        
        /* Scroll Animations */
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }
        
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
        }
        
        .slide-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease;
        }
        
        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .section-title { font-size: 2rem; }
          .story-content { grid-template-columns: 1fr; }
          .nav-items { gap: 1rem; }
          .nav-btn { padding: 0.5rem 1rem; font-size: 0.8rem; }
          .section { padding: 4rem 1rem; }
        }
      `}</style>
      
      {/* Background Effects */}
      <div className="bg-effects"></div>
      
      {/* Particles */}
      <div className="particles" id="particles"></div>
      
      {/* Navigation */}
      <nav className="glass nav">
        <div className="nav-items">
          {/*logo*/}
          <span className="text-4xl font-extrabold bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent drop-shadow-[0_0_10px_#ff00ff]">
            UniLyf
          </span>
          <button className="nav-btn secondary">Login</button>
          <button className="nav-btn primary">Sign Up</button>
        </div>
      </nav>
      
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
            🎓
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
          <h2>Ready to Transform Your Campus Experience?</h2>
          <p>Join the future of student life. Connect, discover, and thrive with your university community.</p>
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