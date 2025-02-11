import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './UnderConstruction.css';

const UnderConstruction = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const { user } = useAuth();

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
  }, []);

  return (
    <div className="construction-background">
      <nav className="top-nav">
        <div className="nav-brand">CloudPioneer Dashboard</div>
        <Link to="/" className="home-button">
          Return to Home
        </Link>
      </nav>

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
      <div className="construction-content">
        <div className="gear-icon">⚙️</div>
        <h1 className="construction-title">Thank You for Your Interest!</h1>
        <div className="thank-you-message">
          <p className="user-greeting">Welcome, {user?.email}!</p>
          <p className="construction-message">
            We're thrilled to have you on board! Our team is working hard to bring you a revolutionary 
            cloud optimization platform that will transform how you manage your infrastructure.
          </p>
          <p className="notification-message">
            We'll notify you at {user?.email} as soon as our product launches. You'll be among the first 
            to experience our cutting-edge solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
