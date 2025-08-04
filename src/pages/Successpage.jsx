// src/pages/PaymentSuccess.jsx

import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4 text-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <svg
          className="mx-auto mb-4 w-20 h-20 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase. An email with your download link has been sent.</p>
        
        <Link to="/" className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
