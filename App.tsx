
import React, { useState, useCallback } from 'react';
import type { Results } from './types';
import { generatePlaceRecommendations } from './services/geminiService';
import LocationInput from './components/LocationInput';
import CategorySelector from './components/CategorySelector';
import ResultsDisplay from './components/ResultsDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const availableCategories = ['Restaurants', 'Cafes', 'Bars', 'Shops', 'Museums', 'Parks', 'Clubs', 'Hotels', 'Property Dealers', 'Rental Brokers', 'Investment Advisors', 'Car Dealers'];

const App: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Restaurants', 'Cafes']);
  const [results, setResults] = useState<Results | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCategoryToggle = useCallback((category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!location.trim()) {
      setError('Please enter a location.');
      return;
    }
    if (selectedCategories.length === 0) {
      setError('Please select at least one category.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const generatedResults = await generatePlaceRecommendations(location, selectedCategories);
      setResults(generatedResults);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [location, selectedCategories]);
  
  const handleLocationChange = useCallback((newLocation: string) => {
    setLocation(newLocation);
    if (error) {
        setError(null);
    }
  }, [error]);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center my-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            Local Gems Finder
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover popular local spots in any city, from restaurants and cafes to museums and parks.
          </p>
        </header>

        <main>
          <LocationInput
            location={location}
            onLocationChange={handleLocationChange}
            onGenerate={handleGenerate}
            isLoading={isLoading}
            isGenerateDisabled={!location.trim() || selectedCategories.length === 0}
          />
          <CategorySelector
            availableCategories={availableCategories}
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
            disabled={isLoading}
          />

          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          
          <div className="mt-8">
            {results ? (
              <ResultsDisplay results={results} />
            ) : (
                !isLoading && !error && (
                <div className="text-center py-16 px-4 bg-gray-800 rounded-lg border border-gray-700">
                    <h2 className="text-2xl font-semibold text-gray-200">Ready to explore?</h2>
                    <p className="mt-2 text-gray-400">Enter a location and select categories to find the best spots.</p>
                </div>
                )
            )}
          </div>
        </main>
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Powered by Google Gemini</p>
        </footer>
      </div>
    </div>
  );
};

export default App;