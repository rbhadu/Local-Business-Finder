import React from 'react';
import type { Place } from '../types';

interface ResultCardProps {
  place: Place;
}

const ResultCard: React.FC<ResultCardProps> = ({ place }) => {
  const hasLinks = place.website || place.facebook || place.instagram;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 flex flex-col h-full transition-transform transform hover:scale-105 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-white">{place.name}</h3>
        <p className="text-sm text-gray-400 mt-2">{place.address}</p>
        {place.email && (
            <a href={`mailto:${place.email}`} className="mt-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">{place.email}</span>
            </a>
        )}
      </div>
      
      {hasLinks && (
        <div className="mt-4 pt-4 border-t border-gray-700 flex flex-wrap items-center gap-x-6 gap-y-2">
            {place.website && (
            <a
                href={place.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center group"
            >
                Website
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
            )}
            {place.facebook && (
                <a
                    href={place.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center group"
                >
                    Facebook
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            )}
            {place.instagram && (
                <a
                    href={place.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center group"
                >
                    Instagram
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            )}
        </div>
      )}
    </div>
  );
};

export default ResultCard;
