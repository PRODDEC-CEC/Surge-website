import React from 'react';

export default function PageNotFound() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-red-500 mb-4">
          404
        </h1>
        
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-lg mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Go Home Button */}
        <div className="mb-12">
          <button
            onClick={handleGoHome}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Go Back Home
          </button>
        </div>

         
      </div>
    </div>
  );
}