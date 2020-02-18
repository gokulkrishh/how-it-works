import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__content">
      <div className="header__content-left">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <ul className="header__menu">
          <li>
            <Link to="/javascript" activeClassName="header__menu--active">
              Javascript
            </Link>
          </li>
          <li>
            <Link to="/react" activeClassName="header__menu--active">
              React
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__content-right"></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
