import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MfaSetup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('choice');
  const [qrCode, setQrCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');

  const handleSkip = () => {
    navigate('/dashboard');
  };

  const handleEnableMfa = () => {
    setStep('setup');
    // Simulate QR code generation
    setQrCode('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=otpauth://totp/CloudPioneer:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=CloudPioneer');
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Simulate verification
    if (verificationCode === '123456') {
      navigate('/dashboard');
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Multi-Factor Authentication
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enhance your account security with MFA
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {step === 'choice' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      We strongly recommend enabling MFA for enhanced security.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleEnableMfa}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Enable MFA
                </button>
                <button
                  onClick={handleSkip}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Skip for now
                </button>
              </div>
            </div>
          )}

          {step === 'setup' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Setup Instructions</h3>
                <div className="mt-2 space-y-4">
                  <p className="text-sm text-gray-500">
                    1. Download an authenticator app like Google Authenticator or Authy
                  </p>
                  <p className="text-sm text-gray-500">
                    2. Scan the QR code below with your authenticator app
                  </p>
                  <p className="text-sm text-gray-500">
                    3. Enter the 6-digit code from your authenticator app
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={qrCode}
                  alt="MFA QR Code"
                  className="h-48 w-48"
                />
              </div>

              <form onSubmit={handleVerify} className="space-y-6">
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    maxLength="6"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-600">
                      {error}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Verify and Complete Setup
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MfaSetup;
