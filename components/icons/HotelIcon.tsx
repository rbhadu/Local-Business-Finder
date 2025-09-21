
import React from 'react';

const HotelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 22h20" />
        <path d="M12 2v2" />
        <path d="M12 12v-2" />
        <path d="M10 12h4" />
        <path d="M4 20V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
        <path d="M10 8h4" />
        <path d="M10 16h4" />
    </svg>
);

export default HotelIcon;
