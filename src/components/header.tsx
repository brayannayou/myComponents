import React from "react"

import { Link } from "gatsby"

interface Props {
  siteTittle?: string;
}
const Header = ({ siteTitle = '' }) => (
  <header
    style={{
      background: 'rebeccapurple',
    }}
  >
    <div
      style={{
        margin: 'auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
