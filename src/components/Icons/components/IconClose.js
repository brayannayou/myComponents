import React from "react";

const SvgIconClose = props => (
  <svg width={16} height={16} viewBox="0 0 12 12" {...props}>
    <defs>
      <path
        id="icon-close_svg__a"
        d="M4.207 5.008L.165.968a.565.565 0 010-.8.558.558 0 01.8 0l4.04 4.04 4.03-4.04a.558.558 0 01.8 0c.22.221.22.579 0 .8L5.8 5.003l4.034 4.032a.565.565 0 01-.8.8L5.002 5.802.965 9.842A.596.596 0 01.588 10a.565.565 0 01-.4-.965l4.019-4.027z"
      />
    </defs>
    <use
      fill="currentColor"
      fillRule="evenodd"
      transform="translate(1 1)"
      xlinkHref="#icon-close_svg__a"
    />
  </svg>
);

export default SvgIconClose;
