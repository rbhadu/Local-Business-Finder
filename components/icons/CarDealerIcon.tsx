
import React from 'react';

const CarDealerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.54-.89l-2.07-1.18a1 1 0 0 1-.54-.89V9.5a1.5 1.5 0 0 0-1.5-1.5H12a1.5 1.5 0 0 0-1.5 1.5v.39a1 1 0 0 1-.54.89l-2.07 1.18a1 1 0 0 0-.54.89V16h3m1-7.5V6.5a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 8 6.5V8.5" />
        <circle cx="6.5" cy="16.5" r="1.5" />
        <circle cx="17.5" cy="16.5" r="1.5" />
    </svg>
);

export default CarDealerIcon;