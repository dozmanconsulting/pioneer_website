import React from 'react';
import './WhyCloudPioneer.css';

const WhyCloudPioneer = () => {
  const features = [
    {
      title: 'AI-Powered Optimization',
      description: 'Leverage cutting-edge artificial intelligence to automatically optimize your cloud resources, reducing costs and improving performance.',
      icon: '🤖',
      position: 'top'
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Get instant alerts and insights about your cloud infrastructure with our advanced monitoring system.',
      icon: '📊',
      position: 'top-right'
    },
    {
      title: 'Cost Management',
      description: 'Track and optimize your cloud spending with intelligent cost allocation and forecasting tools.',
      icon: '💰',
      position: 'right'
    },
    {
      title: 'Automated Remediation',
      description: 'Automatically detect and fix issues before they impact your business with our self-healing infrastructure.',
      icon: '⚡',
      position: 'bottom-right'
    },
    {
      title: 'Business Intelligence',
      description: 'Gain deep insights into your cloud resource usage, performance metrics, and cost patterns through interactive dashboards and detailed analytics reports.',
      icon: '📈',
      position: 'bottom'
    },
    {
      title: 'Expert Support',
      description: '24/7 access to cloud experts and technical resources',
      icon: '👥',
      position: 'bottom-left'
    },
    {
      title: 'Multi-Cloud Support',
      description: 'Unified management across AWS, Azure, and Google Cloud',
      icon: '☁️',
      position: 'left'
    },
    {
      title: 'Scalability',
      description: 'Seamlessly scale your infrastructure as your business grows',
      icon: '📈',
      position: 'top-left'
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
