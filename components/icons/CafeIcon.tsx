
import React from 'react';

const CafeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M4 8v8" />
        <path d="M4 14h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4" />
        <path d="M22 18H2" />
    </svg>
);

export default CafeIcon;
