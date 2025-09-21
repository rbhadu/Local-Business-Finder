
import React from 'react';

const MuseumIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 18V6l-8-4-8 4v12" />
        <path d="m14 14 4 4" />
        <path d="m6 14 4 4" />
        <path d="M2 22h20" />
        <path d="M6 10h12" />
        <path d="M10 22V10" />
    </svg>
);

export default MuseumIcon;
