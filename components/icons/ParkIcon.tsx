
import React from 'react';

const ParkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s-8-4.5-8-12a8 8 0 0 1 16 0c0 7.5-8 12-8 12z" />
        <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
);

export default ParkIcon;
