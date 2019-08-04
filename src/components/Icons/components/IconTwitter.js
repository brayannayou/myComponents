import React from "react";

const SvgIconTwitter = props => (
  <svg width={25} height={25} {...props}>
    <defs>
      <path
        id="icon-twitter_svg__a"
        d="M23.47 5.065a5.76 5.76 0 01-2.38.77 4.45 4.45 0 001.84-2.77 5.32 5.32 0 01-3.12 1.27 4.6 4.6 0 00-7.84 3.28c-.003.37.04.74.13 1.1h-.34c-4.28-.56-7.77-2.53-9.14-4.89a4.22 4.22 0 00-.68 1.79 5.32 5.32 0 002 4.54 16.14 16.14 0 01-2.2-.68c0 1.73 1.18 3.4 3.08 4.65H3.56c.21 1.63 1.9 3.06 4.12 3.35h.24a11.87 11.87 0 01-6.92 2 13.31 13.31 0 007 2c7.168.078 13.047-5.662 13.14-12.83v-1.05a5.31 5.31 0 002.33-2.53z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <mask id="icon-twitter_svg__b" fill="#fff">
        <use xlinkHref="#icon-twitter_svg__a" />
      </mask>
      <use fill="#141414" xlinkHref="#icon-twitter_svg__a" />
      <g fill="#54575F" mask="url(#icon-twitter_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgIconTwitter;
