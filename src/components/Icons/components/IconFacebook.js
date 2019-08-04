import React from "react";

const SvgIconFacebook = props => (
  <svg width={25} height={25} {...props}>
    <defs>
      <path
        id="icon-facebook_svg__a"
        d="M6.908 3.627H9V.16L5.645.004a3.677 3.677 0 00-2.781 1.087 4.032 4.032 0 00-1.167 2.856v2.58H0v3.355h1.697V22h3.948V9.882h2.733l.563-3.396H5.605V4.948c0-.357.139-.7.384-.949.246-.249.577-.383.919-.372z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(9 2)">
      <mask id="icon-facebook_svg__b" fill="#fff">
        <use xlinkHref="#icon-facebook_svg__a" />
      </mask>
      <use fill="#141414" xlinkHref="#icon-facebook_svg__a" />
      <g fill="#54575F" mask="url(#icon-facebook_svg__b)">
        <path d="M-8-1h23.913v23.913H-8z" />
      </g>
    </g>
  </svg>
);

export default SvgIconFacebook;
