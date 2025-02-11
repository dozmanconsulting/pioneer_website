import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      credits: '20',
      support: 'Community',
      features: [
        '20 monthly credits',
        'Community support',
        'Public API access',
        'Documentation access',
        'Best effort SLA'
      ],
      creditExamples: [
        'Up to 20 API calls',
        'Or 2 GB storage days',
        'Perfect for testing',
        'No credit card required'
      ]
    },
    {
      name: 'Starter',
      price: '$99',
      credits: '10,000',
      support: 'Community',
      features: [
        '10,000 monthly credits',
        'Community support',
        'Basic analytics',
        'API access',
        'Standard SLA'
      ],
      creditExamples: [
        'Up to 10,000 API calls',
        'Or 1,000 GB storage days',
        'Or 200 basic compute hours',
        'Or mix and match resources'
      ]
    },
    {
      name: 'Growth',
      price: '$499',
      credits: '60,000',
      support: 'Email',
      popular: true,
      features: [
        '60,000 monthly credits',
        'Email support',
        'Advanced analytics',
        'Priority API access',
        'Enhanced SLA'
      ],
      creditExamples: [
        'Up to 60,000 API calls',
        'Or 6,000 GB storage days',
        'Or 1,200 basic compute hours',
        'Or mix and match resources'
      ]
    },
    {
      name: 'Scale',
      price: '$1,999',
      credits: '300,000',
      support: '24/7',
      features: [
        '300,000 monthly credits',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Dedicated API endpoints',
        'Custom SLA'
      ],
      creditExamples: [
        'Up to 300,000 API calls',
        'Or 30,000 GB storage days',
        'Or 6,000 basic compute hours',
        'Or mix and match resources'
      ]
    }
  ];

  const creditCosts = [
    { service: 'API Call', cost: '1 credit' },
    { service: 'Storage', cost: '10 credits per GB/day' },
    { service: 'Basic Compute', cost: '50 credits per hour' },
    { service: 'ML Inference', cost: '200 credits per hour' },
    { service: 'Custom Model', cost: '500 credits per hour' }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start free, upgrade as you grow with our flexible credit system
          </p>
        </div>

        {/* Credit Cost Reference */}
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Credit Usage Guide
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {creditCosts.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{item.service}</span>
                  <span className="font-medium text-gray-900">{item.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 transform">
                  <span className="inline-flex rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold text-gray-600">/month</span>
                </p>
                <p className="mt-2 text-gray-600">
                  {plan.credits} credits included
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Credit Examples */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-900">
                    What you can do with these credits:
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {plan.creditExamples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-600">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    to={plan.name === 'Free' ? '/signup' : '/contact'}
                    className={`block w-full text-center py-3 px-4 rounded-md transition-colors ${
                      plan.name === 'Free'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {plan.name === 'Free' ? 'Start Free' : 'Get Started'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Need a custom solution?
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Contact us for enterprise pricing and custom solutions tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
