import PropTypes from "prop-types"
import React from "react"

const Subscription = () => (
  <div className="Subscription">
    <h2>Subscribe</h2>
    <p>Weekly newsletter</p>
    <form
      action="//dev.us4.list-manage.com/subscribe/post?u=d9011fcde206b61bac7f4af0a&amp;id=e2854f474e"
      method="post"
      target="_blank"
    >
      <input type="text" name="FNAME" id="mce-FNAME" placeholder="First name" />
      <input
        className="email-address"
        name="EMAIL"
        type="email"
        id="mce-EMAIL"
        placeholder="Email address"
        required
      />

      <input
        className="submit-btn"
        id="mc-embedded-subscribe"
        type="submit"
        value="Submit"
      />
    </form>
  </div>
)

Subscription.propTypes = {
  siteTitle: PropTypes.string,
}

Subscription.defaultProps = {
  siteTitle: ``,
}

export default Subscription
