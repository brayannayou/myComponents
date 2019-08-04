import React from "react";

const SvgIconSteperror = props => (
  <svg width={16} height={16} {...props}>
    <defs>
      <linearGradient
        id="icon-steperror_svg__a"
        x1="100%"
        x2="0%"
        y1="50%"
        y2="50%"
      >
        <stop offset="0%" stopColor="#757575" />
        <stop offset="100%" stopColor="#54575F" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={8} cy={8} r={8} fill="url(#icon-steperror_svg__a)" />
      <g fill="#FFF" transform="translate(4 4)">
        <rect
          width={1.333}
          height={9.333}
          x={3.333}
          y={-0.667}
          rx={0.667}
          transform="rotate(45 4 4)"
        />
        <rect
          width={1.333}
          height={9.333}
          x={3.333}
          y={-0.667}
          rx={0.667}
          transform="rotate(-45 4 4)"
        />
      </g>
    </g>
  </svg>
);

export default SvgIconSteperror;
