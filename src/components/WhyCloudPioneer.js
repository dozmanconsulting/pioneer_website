import React from 'react';
import { Link } from 'react-router-dom';

const WhyCloudPioneer = () => {
  const features = [
    {
      title: 'AI-Powered Optimization',
      description: 'Leverage cutting-edge artificial intelligence to automatically optimize your cloud resources, reducing costs and improving performance.',
      icon: '🤖'
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Get instant alerts and insights about your cloud infrastructure with our advanced monitoring system.',
      icon: '📊'
    },
    {
      title: 'Cost Management',
      description: 'Track and optimize your cloud spending with intelligent cost allocation and forecasting tools.',
      icon: '💰'
    },
    {
      title: 'Automated Remediation',
      description: 'Automatically detect and fix issues before they impact your business with our self-healing infrastructure.',
      icon: '⚡'
    },
    {
      title: 'Business Intelligence',
      description: 'Gain deep insights into your cloud resource usage, performance metrics, and cost patterns through interactive dashboards and detailed analytics reports. Make data-driven decisions with comprehensive visibility across your entire cloud infrastructure.',
      icon: '📈'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose CloudPioneer?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Optimize your cloud infrastructure with cutting-edge AI technology and comprehensive business intelligence
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
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
