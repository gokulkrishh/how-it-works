import PropTypes from "prop-types";
import React from "react";

const Subscription = () => (
  <div className="Subscription__container">
    <h4>Know more from your inbox weekly :)</h4>

    <div className="Subscription__content">
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/gokulkrishh"
        method="post"
        target="popupwindow"
        class="embeddable-buttondown-form"
        autoComplete={"on"}
      >
        <input
          id="bd-email"
          className="email-address"
          placeholder="Email address"
          required
          name="email"
        />
        <input type="hidden" value="1" name="embed" />

        <input
          className="submit-btn"
          id="mc-embedded-subscribe"
          type="submit"
          value="Subscribe"
        />
      </form>
    </div>
  </div>
);

Subscription.propTypes = {
  siteTitle: PropTypes.string,
};

Subscription.defaultProps = {
  siteTitle: ``,
};

export default Subscription;
