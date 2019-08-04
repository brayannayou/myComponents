import React from "react";

const SvgIconPhone = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        id="icon-phone_svg__a"
        d="M16.57 22a5.713 5.713 0 01-3.13-.931A43.874 43.874 0 01.926 8.514a5.621 5.621 0 01.678-7.021l.72-.722a2.572 2.572 0 013.88.24L8.34 3.764c1 1.302.884 3.146-.272 4.311l-.156.157a76.44 76.44 0 005.893 5.807l.156-.157a3.257 3.257 0 014.297-.272l2.743 2.092a2.608 2.608 0 01.24 3.893l-.71.7A5.53 5.53 0 0116.57 22zM4.2 1.587c-.274.001-.536.11-.73.304l-.72.722a4.038 4.038 0 00-.48 5.043A41.963 41.963 0 0014.328 19.75a4.027 4.027 0 005.059-.482l.709-.711A1.048 1.048 0 0020 17.02l-2.743-2.093a1.686 1.686 0 00-2.232.136l-.678.69a.79.79 0 01-1.043 0 80.436 80.436 0 01-6.988-7.01.797.797 0 010-1.046l.689-.68a1.71 1.71 0 00.135-2.239L5.055 2.027a1.042 1.042 0 00-.75-.398L4.2 1.587z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <mask id="icon-phone_svg__b" fill="#fff">
        <use xlinkHref="#icon-phone_svg__a" />
      </mask>
      <use fill="#141414" fillRule="nonzero" xlinkHref="#icon-phone_svg__a" />
      <g fill="#54575F" mask="url(#icon-phone_svg__b)">
        <path d="M-1-1h24v24H-1z" />
      </g>
    </g>
  </svg>
);

export default SvgIconPhone;
