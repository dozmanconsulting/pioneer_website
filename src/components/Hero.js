import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Background rotation
    const rotationInterval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % 3);
    }, 30000);

    return () => clearInterval(rotationInterval);
  }, []);

  useEffect(() => {
    // Generate random nodes
    const newNodes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setNodes(newNodes);

    // Generate connections between nodes
    const newConnections = [];
    newNodes.forEach((node, i) => {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = Math.floor(Math.random() * newNodes.length);
        if (targetIndex !== i) {
          newConnections.push({
            id: `${i}-${j}`,
            x1: node.x,
            y1: node.y,
            x2: newNodes[targetIndex].x,
            y2: newNodes[targetIndex].y,
            delay: Math.random() * 2
          });
        }
      }
    });
    setConnections(newConnections);
  }, [currentBackground]); // Regenerate nodes when background changes

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background 1 - Neural Network */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${currentBackground === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="neural-network">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="node"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                animationDelay: `${node.delay}s`
              }}
            />
          ))}
          {connections.map((conn) => (
            <div
              key={conn.id}
              className="connection"
              style={{
                left: `${conn.x1}%`,
                top: `${conn.y1}%`,
                width: `${Math.hypot(conn.x2 - conn.x1, conn.y2 - conn.y1)}%`,
                transform: `rotate(${Math.atan2(conn.y2 - conn.y1, conn.x2 - conn.x1)}rad)`,
                animationDelay: `${conn.delay}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Background 2 - Grid Pattern */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${currentBackground === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid-pattern"></div>
      </div>

      {/* Background 3 - Particles */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${currentBackground === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="particles-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Cloud Optimization Made Simple
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Optimize your cloud infrastructure with AI-powered insights and automation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
