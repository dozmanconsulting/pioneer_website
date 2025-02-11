import React from 'react';
import './WhyCloudPioneer.css';

const WhyCloudPioneer = () => {
  const features = [
    {
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 30% with our intelligent optimization engine',
      icon: '💰',
      position: 'top'
    },
    {
      title: 'Business Intelligence',
      description: 'Make data-driven decisions with real-time analytics and insights',
      icon: '📊',
      position: 'top-right'
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with continuous compliance monitoring',
      icon: '🔒',
      position: 'right'
    },
    {
      title: 'Automated Management',
      description: 'Streamline operations with AI-powered automation',
      icon: '🤖',
      position: 'bottom-right'
    },
    {
      title: 'Performance Optimization',
      description: 'Maximize efficiency with intelligent resource allocation',
      icon: '⚡',
      position: 'bottom'
    },
    {
      title: 'Expert Support',
      description: '24/7 access to cloud experts and technical resources',
      icon: '👥',
      position: 'bottom-left'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose CloudPioneer?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the advantages that make us your ideal cloud partner
          </p>
        </div>

        <div className="relative" style={{ height: '800px' }}>
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center z-10 center-circle">
            <span className="text-white text-lg font-bold text-center">
              CloudPioneer
            </span>
          </div>

          {/* Feature cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card absolute w-64 bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 ${feature.position}`}
            >
              <div className="text-4xl mb-4 feature-icon">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyCloudPioneer;
