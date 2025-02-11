import React from 'react';

const Solutions = () => {
  const features = [
    {
      title: 'Intelligent Resource Management',
      description: 'AI-driven optimization of cloud resources for maximum efficiency',
      icon: '🤖'
    },
    {
      title: 'Cost Control',
      description: 'Automated resource scaling based on actual usage patterns',
      icon: '💰'
    },
    {
      title: 'Real-time Analytics',
      description: 'Actionable insights for better decision-making',
      icon: '📊'
    },
    {
      title: 'SRE Automation',
      description: 'Proactive incident detection and automated resolution',
      icon: '⚡'
    }
  ];

  const resources = [
    'Kubernetes clusters',
    'Cassandra databases',
    'Virtual machines',
    'Serverless workloads',
    'Data lakes',
    'Load balancers'
  ];

  const securityFeatures = [
    'Multi-factor authentication',
    'OAuth2/OIDC compliance',
    'Fine-grained IAM roles',
    'Encryption at rest and in transit',
    'VPC isolation',
    'Comprehensive audit trails'
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#041322] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Intelligent Cloud Management Solution
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionize how you manage your cloud infrastructure with advanced AI and machine learning.
            </p>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            The Challenge
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <ul className="space-y-4">
              {[
                'Limited visibility into cloud resources',
                'Unnecessary costs from unused infrastructure',
                'Frequent downtime from resource failures',
                'Manual and time-consuming incident response',
                'Lack of proactive resource optimization'
              ].map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-red-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-lg text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Solution
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            System Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authentication Flow</h3>
              <ul className="space-y-2">
                <li>User authentication via Cognito</li>
                <li>JWT token management</li>
                <li>Secure API access</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Processing</h3>
              <ul className="space-y-2">
                <li>ML model inference</li>
                <li>Predictive analytics</li>
                <li>Automated decision-making</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Management</h3>
              <ul className="space-y-2">
                <li>Distributed storage</li>
                <li>Real-time processing</li>
                <li>Analytics pipeline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Supported Resources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 flex items-center">
                <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{resource}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Security & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#041322]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-8">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#041322] bg-white hover:bg-gray-100"
          >
            Get Started
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
