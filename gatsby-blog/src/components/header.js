import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      GabrielCMoris
    </Link>
    <img
      alt="GCM Logo"
      height={50}
      style={{ margin: 0 }}
      src="https://www.gabrielcmoris.com/assets/me-ac83e766.png"
    />
  </header>
)

export default Header
