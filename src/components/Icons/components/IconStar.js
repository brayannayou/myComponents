import React from "react";

const SvgIconStar = props => (
  <svg width={18} height={18} {...props}>
    <defs>
      <linearGradient id="icon-star_svg__a" x1="100%" x2="0%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#FD8D57" />
        <stop offset="100%" stopColor="#EFFF07" />
      </linearGradient>
    </defs>
    <path
      fill="url(#icon-star_svg__a)"
      stroke="#686767"
      d="M16 6.2c0-.248-.18-.403-.539-.464l-4.826-.735L8.47.413C8.35.138 8.192 0 8.001 0c-.193 0-.35.138-.472.413L5.365 5.001l-4.827.735C.18 5.797 0 5.952 0 6.2c0 .142.08.303.24.484l3.5 3.57-.826 5.04a1.73 1.73 0 00-.02.202c0 .141.034.26.101.358a.345.345 0 00.303.146c.116 0 .244-.04.385-.12L8 13.5l4.317 2.379a.76.76 0 00.385.121c.263 0 .394-.168.394-.504a1.6 1.6 0 00-.01-.202l-.826-5.04 3.49-3.57c.167-.174.25-.336.25-.484z"
      transform="translate(1 1)"
    />
  </svg>
);

export default SvgIconStar;
