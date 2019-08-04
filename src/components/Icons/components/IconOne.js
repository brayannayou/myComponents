import React from "react";

const SvgIconOne = props => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd" opacity={0.72}>
      <path
        fill="#D7D7D7"
        fillRule="nonzero"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
      />
      <text
        fill="#54575F"
        fillOpacity={0.95}
        fontFamily="TruenoRg, Trueno"
        fontSize={14}
      >
        <tspan x={9.291} y={17}>
          {"1"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default SvgIconOne;
