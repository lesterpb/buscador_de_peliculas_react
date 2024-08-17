import React from 'react';

const Svg = ({img, width, height, viewBox}) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d={img} fill="currentColor"/>
        </svg>
     );
}

export default Svg;
