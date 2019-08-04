import React from "react";

const SvgIconArrowDown = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        id="icon-arrow-down_svg__a"
        d="M16.681 5.215l-9.8-9.89a1.097 1.097 0 00-1.558 0 1.116 1.116 0 000 1.57l9.023 9.104-9.022 9.106a1.117 1.117 0 000 1.57c.43.433 1.128.433 1.558 0l9.8-9.89a1.128 1.128 0 000-1.57z"
      />
    </defs>
    <use
      fill="currentColor"
      fillRule="evenodd"
      transform="rotate(90 8.5 9.5)"
      xlinkHref="#icon-arrow-down_svg__a"
    />
  </svg>
);

export default SvgIconArrowDown;
