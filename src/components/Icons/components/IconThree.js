import React from "react";

const SvgIconThree = props => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle
        cx={12}
        cy={12}
        r={11}
        fill="#FFF"
        stroke="#D7D7D7"
        strokeWidth={2}
      />
      <text
        fill="#54575F"
        fillOpacity={0.95}
        fontFamily="TruenoRg, Trueno"
        fontSize={14}
      >
        <tspan x={8.227} y={17}>
          {"3"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default SvgIconThree;
