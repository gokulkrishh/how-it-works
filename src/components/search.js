import PropTypes from "prop-types"
import React from "react"

const Search = () => (
  <div className="Search">
    <input type="text" placeholder="Search" />
  </div>
)

Search.propTypes = {
  siteTitle: PropTypes.string,
}

Search.defaultProps = {
  siteTitle: ``,
}

export default Search
