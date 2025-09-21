
import React from 'react';

const BarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22V12" />
        <path d="M5 12h14" />
        <path d="m5 12-2-4h18l-2 4" />
        <path d="M12 7V4" />
    </svg>
);

export default BarIcon;
