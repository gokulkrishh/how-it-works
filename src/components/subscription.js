import PropTypes from "prop-types"
import React from "react"

const Subscription = () => (
  <div className="Subscription">
    <h3>Subscribe here</h3>
    <input type="text" placeholder="First name" />
    <input type="text" placeholder="Email id" />
    <button>Subscribe</button>
  </div>
)

Subscription.propTypes = {
  siteTitle: PropTypes.string,
}

Subscription.defaultProps = {
  siteTitle: ``,
}

export default Subscription
