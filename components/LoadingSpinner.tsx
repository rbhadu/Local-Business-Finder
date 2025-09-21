
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16 text-center">
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-300 font-medium">Finding the best local gems for you...</p>
      <p className="text-sm text-gray-500">This may take a moment.</p>
    </div>
  );
};

export default LoadingSpinner;
