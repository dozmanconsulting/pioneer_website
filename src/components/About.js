import React from 'react';

const About = () => {
  const stats = [
    { label: 'Uptime', value: '99.9%' },
    { label: 'Cost Savings', value: '30%+' },
    { label: 'Response Time', value: '<200ms' },
    { label: 'Customer Satisfaction', value: '4.5/5' }
  ];

  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About CloudPioneer
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            The industry-leading platform for cloud cost optimization, business intelligence, and SRE automation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-lg text-gray-500">
                To become the industry-leading platform for cloud cost optimization, business intelligence, 
                and SRE automation, enabling organizations to make data-driven decisions and maximize the 
                value of their cloud investments.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-500">
                To deliver an intelligent, automated platform that optimizes cloud costs, provides real-time 
                business insights, and drives operational efficiency through advanced analytics, AI/ML capabilities, 
                and SRE automation.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose CloudPioneer</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-600">AI-powered optimization and automation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-600">Real-time monitoring and analytics</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-600">Automated incident response and resolution</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-600">24/7 expert support and maintenance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
