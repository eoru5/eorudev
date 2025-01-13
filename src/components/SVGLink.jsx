import React from 'react';

const SVGLink = ({to, viewBox, path, target='_blank'}) => {
  return (
    <a className="w-6 h-6 group hover:cursor-pointer" href={to} target={target}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <defs>
          <linearGradient id="hover-gradient" x1="0%" y1="0%" x2="200%" y2="0%">
            <stop offset="0%" stopColor="#f0abfc" />
            <stop offset="16.67%" stopColor="#fae8ff" />
            <stop offset="33.33%" stopColor="#fca5a5" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="66.67%" stopColor="#fca5a5" />
            <stop offset="83.33%" stopColor="#fae8ff" />
            <stop offset="100%" stopColor="#f0abfc" />
            <animateTransform attributeName="gradientTransform" type="translate" from="-2 0" to="2 0" begin="0s" dur="3s" repeatCount="indefinite"/>
          </linearGradient>
        </defs>
        {path}
      </svg>
    </a>
  )
}

export default SVGLink;