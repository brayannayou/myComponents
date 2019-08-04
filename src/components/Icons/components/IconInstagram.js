import React from "react";

const SvgIconInstagram = props => (
  <svg width={25} height={25} {...props}>
    <defs>
      <path
        id="icon-instagram_svg__a"
        d="M17.71 22.79H7.09A5.1 5.1 0 012 17.7V7.08A5.1 5.1 0 017.09 2h10.62a5.09 5.09 0 015.09 5.08V17.7a5.09 5.09 0 01-5.09 5.09zM7.09 3.5a3.59 3.59 0 00-3.58 3.58V17.7a3.59 3.59 0 003.58 3.59h10.62a3.59 3.59 0 003.59-3.59V7.08a3.59 3.59 0 00-3.59-3.58H7.09zm5.31 14.04a5.15 5.15 0 11-.08-10.3 5.15 5.15 0 01.08 10.3zm0-8.79a3.65 3.65 0 103.65 3.64 3.64 3.64 0 00-3.65-3.64zm5.93-.86a1.45 1.45 0 110-2.9 1.45 1.45 0 010 2.9z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <mask id="icon-instagram_svg__b" fill="#fff">
        <use xlinkHref="#icon-instagram_svg__a" />
      </mask>
      <use
        fill="#141414"
        fillRule="nonzero"
        xlinkHref="#icon-instagram_svg__a"
      />
      <g fill="#54575F" mask="url(#icon-instagram_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgIconInstagram;
