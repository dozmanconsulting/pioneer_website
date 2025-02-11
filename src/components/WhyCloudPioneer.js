import React from 'react';
import { Link } from 'react-router-dom';

const WhyCloudPioneer = () => {
  const features = [
    {
      title: 'AI-Powered Optimization',
      description: 'Leverage cutting-edge artificial intelligence to automatically optimize your cloud resources, reducing costs and improving performance.',
      icon: '🤖',
      position: 'top' // 12 o'clock
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Get instant alerts and insights about your cloud infrastructure with our advanced monitoring system.',
      icon: '📊',
      position: 'top-right' // 2 o'clock
    },
    {
      title: 'Cost Management',
      description: 'Track and optimize your cloud spending with intelligent cost allocation and forecasting tools.',
      icon: '💰',
      position: 'bottom-right' // 4 o'clock
    },
    {
      title: 'Automated Remediation',
      description: 'Automatically detect and fix issues before they impact your business with our self-healing infrastructure.',
      icon: '⚡',
      position: 'bottom-left' // 8 o'clock
    },
    {
      title: 'Business Intelligence',
      description: 'Gain deep insights into your cloud resource usage, performance metrics, and cost patterns through interactive dashboards and detailed analytics reports.',
      icon: '📈',
      position: 'top-left' // 10 o'clock
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose CloudPioneer?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Optimize your cloud infrastructure with cutting-edge AI technology and comprehensive business intelligence
          </p>
        </div>

        <div className="relative h-[800px] max-w-[1000px] mx-auto">
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold text-center">CloudPioneer</span>
          </div>

          {/* Feature cards positioned in a star pattern */}
          {features.map((feature, index) => {
            let positionClass = '';
            switch (feature.position) {
              case 'top':
                positionClass = 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4';
                break;
              case 'top-right':
                positionClass = 'top-1/4 right-0 transform translate-x-1/4';
                break;
              case 'bottom-right':
                positionClass = 'bottom-1/4 right-0 transform translate-x-1/4';
                break;
              case 'bottom-left':
                positionClass = 'bottom-1/4 left-0 transform -translate-x-1/4';
                break;
              case 'top-left':
                positionClass = 'top-1/4 left-0 transform -translate-x-1/4';
                break;
              default:
                positionClass = '';
            }

            return (
              <div
                key={index}
                className={`absolute ${positionClass} w-64 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                {/* Connecting line to center */}
                <div className="absolute inset-0 z-0">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="0"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeDasharray="4"
                    />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyCloudPioneer;
