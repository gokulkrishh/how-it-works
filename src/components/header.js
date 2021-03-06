import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import ToggleTheme from "./ToggleTheme";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__content">
      <div className="header__content-left">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <div className="header__content-right">
        <ul className="header__menu">
          <li>
            <Link to="/posts" activeClassName="header__menu--active">
              Posts
            </Link>
          </li>
        </ul>
        <ToggleTheme />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
