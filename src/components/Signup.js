import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [selectedTier, setSelectedTier] = useState('free');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const tiers = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      credits: '20',
      features: [
        '20 monthly credits',
        'Community support',
        'Public API access',
        'Documentation access',
        'Best effort SLA'
      ]
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '$999',
      credits: '100,000',
      features: [
        '100,000 monthly credits',
        'Email support',
        'Advanced monitoring',
        'API rate limit increase',
        '99.9% SLA'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '$2,499',
      credits: '300,000',
      features: [
        '300,000 monthly credits',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        '99.99% SLA'
      ]
    },
    {
      id: 'scale',
      name: 'Scale',
      price: 'Custom',
      credits: 'Custom',
      features: [
        'Unlimited credits',
        'Dedicated support',
        'Custom solutions',
        'On-premise deployment',
        '99.999% SLA'
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!agreed) {
      setError('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    try {
      await register(email, password, company, selectedTier);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company name
              </label>
              <div className="mt-1">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Select your plan</label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`relative rounded-lg border p-4 shadow-sm cursor-pointer ${
                      selectedTier === tier.id
                        ? 'border-blue-500 ring-2 ring-blue-500'
                        : 'border-gray-300'
                    }`}
                    onClick={() => setSelectedTier(tier.id)}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
                        <div className="ml-4">
                          <span className="text-lg font-medium text-gray-900">{tier.price}</span>
                          {tier.id !== 'scale' && <span className="text-sm text-gray-500">/mo</span>}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        {tier.credits} credits per month
                      </p>
                      <ul className="mt-4 space-y-2">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-2 text-sm text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={!agreed}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  agreed
                    ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
