
import React from 'react';

interface LocationInputProps {
  location: string;
  onLocationChange: (location: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  isGenerateDisabled: boolean;
}

const LocationInput: React.FC<LocationInputProps> = ({ location, onLocationChange, onGenerate, isLoading, isGenerateDisabled }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isGenerateDisabled) {
      onGenerate();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
      <input
        type="text"
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g., Tokyo, Japan or Paris"
        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-white placeholder-gray-400"
        disabled={isLoading}
      />
      <button
        onClick={onGenerate}
        disabled={isLoading || isGenerateDisabled}
        className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-200 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          'Find Gems'
        )}
      </button>
    </div>
  );
};

export default LocationInput;
