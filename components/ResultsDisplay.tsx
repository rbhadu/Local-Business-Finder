
import React, { useState, useEffect } from 'react';
import type { Results, Place } from '../types';
import ResultCard from './ResultCard';
import RestaurantIcon from './icons/RestaurantIcon';
import ShopIcon from './icons/ShopIcon';
import ClubIcon from './icons/ClubIcon';
import CafeIcon from './icons/CafeIcon';
import BarIcon from './icons/BarIcon';
import MuseumIcon from './icons/MuseumIcon';
import ParkIcon from './icons/ParkIcon';
import HotelIcon from './icons/HotelIcon';
import PropertyDealerIcon from './icons/PropertyDealerIcon';
import RentalBrokerIcon from './icons/RentalBrokerIcon';
import InvestmentAdvisorIcon from './icons/InvestmentAdvisorIcon';
import CarDealerIcon from './icons/CarDealerIcon';

interface ResultsDisplayProps {
  results: Results;
}

const categoryConfig: Record<string, { label: string; icon: JSX.Element }> = {
    Restaurants: { label: "Restaurants", icon: <RestaurantIcon className="w-5 h-5 mr-2" /> },
    Shops: { label: "Shops", icon: <ShopIcon className="w-5 h-5 mr-2" /> },
    Clubs: { label: "Clubs", icon: <ClubIcon className="w-5 h-5 mr-2" /> },
    Cafes: { label: "Cafés", icon: <CafeIcon className="w-5 h-5 mr-2" /> },
    Bars: { label: "Bars", icon: <BarIcon className="w-5 h-5 mr-2" /> },
    Museums: { label: "Museums", icon: <MuseumIcon className="w-5 h-5 mr-2" /> },
    Parks: { label: "Parks", icon: <ParkIcon className="w-5 h-5 mr-2" /> },
    Hotels: { label: "Hotels", icon: <HotelIcon className="w-5 h-5 mr-2" /> },
    'Property Dealers': { label: "Property Dealers", icon: <PropertyDealerIcon className="w-5 h-5 mr-2" /> },
    'Rental Brokers': { label: "Rental Brokers", icon: <RentalBrokerIcon className="w-5 h-5 mr-2" /> },
    'Investment Advisors': { label: "Investment Advisors", icon: <InvestmentAdvisorIcon className="w-5 h-5 mr-2" /> },
    'Car Dealers': { label: "Car Dealers", icon: <CarDealerIcon className="w-5 h-5 mr-2" /> },
};


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const resultCategories = Object.keys(results);
  const [activeTab, setActiveTab] = useState<string>(resultCategories[0] || '');

  useEffect(() => {
    // Reset active tab if results change and the current tab is no longer valid
    if (resultCategories.length > 0 && !resultCategories.includes(activeTab)) {
        setActiveTab(resultCategories[0]);
    }
  }, [results, activeTab, resultCategories]);
  
  const activeResults: Place[] = results[activeTab] || [];

  if (resultCategories.length === 0) {
    return (
        <div className="text-center py-16 px-4 bg-gray-800 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-200">No results found.</h2>
            <p className="mt-2 text-gray-400">Try a different location or broaden your categories.</p>
        </div>
    )
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl overflow-hidden">
      <div className="border-b border-gray-700">
        <nav className="flex overflow-x-auto" aria-label="Tabs">
          {resultCategories.map((category) => {
            const config = categoryConfig[category] || { label: category, icon: null };
            return (
                <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`flex-shrink-0 px-4 sm:px-6 py-4 text-sm font-medium transition-colors duration-200 flex items-center justify-center
                    ${activeTab === category
                    ? 'border-b-2 border-indigo-500 text-indigo-400'
                    : 'border-b-2 border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                    }`}
                >
                {config.icon}
                {config.label}
                </button>
            )
          })}
        </nav>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeResults.length > 0 ? (
            activeResults.map((place, index) => (
              <ResultCard key={`${activeTab}-${place.name}-${index}`} place={place} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 py-8">No results found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;