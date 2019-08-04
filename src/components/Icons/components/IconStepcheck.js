import React from "react";

const SvgIconStepcheck = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <linearGradient
        id="icon-stepcheck_svg__a"
        x1="93.084%"
        x2="0%"
        y1="23.111%"
        y2="77.643%"
      >
        <stop offset="0%" stopColor="#3E9814" />
        <stop offset="100%" stopColor="#1BDB10" />
      </linearGradient>
      <path
        id="icon-stepcheck_svg__b"
        d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-1.811-9.061L7.06 11.81 6 12.873l4.189 4.188 9-9L18.128 7l-7.94 7.939z"
      />
    </defs>
    <use
      fill="url(#icon-stepcheck_svg__a)"
      fillRule="evenodd"
      xlinkHref="#icon-stepcheck_svg__b"
    />
  </svg>
);

export default SvgIconStepcheck;
