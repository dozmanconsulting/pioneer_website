import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Cost Optimization',
      description: 'AI-powered cloud cost optimization with real-time tracking, automated optimization, and intelligent resource management.',
      features: [
        'Real-time cost tracking',
        'AI-powered recommendations',
        'Automated resource scaling',
        'Waste reduction',
        'Budget management'
      ],
      icon: '💰'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and ML-driven insights to help you make data-driven decisions and optimize cloud operations.',
      features: [
        'Real-time dashboards',
        'ML-driven analysis',
        'Predictive insights',
        'Custom reporting',
        'Compliance tracking'
      ],
      icon: '📊'
    },
    {
      title: 'SRE Automation',
      description: 'Automated incident response and proactive monitoring to ensure maximum uptime and system reliability.',
      features: [
        'AI-powered detection',
        'Automated resolution',
        'Self-healing systems',
        'Enhanced CLI interface',
        'Automated documentation'
      ],
      icon: '⚡'
    }
  ];

  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Platform Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            An all-in-one cloud optimization and SRE automation platform powered by artificial intelligence
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started with CloudPioneer
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
