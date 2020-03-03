import PropTypes from "prop-types";
import React from "react";

const Subscription = () => {
  const [styles, setStyles] = React.useState({});
  const ref = React.createRef();

  return (
    <div className="Subscription__container">
      <h4>Know more from your inbox weekly (Tuesday) :)</h4>
      <p>I promise there won't be any spamming!</p>

      <div className="Subscription__content">
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/gokulkrishh"
          method="post"
          target="popupwindow"
          className="embeddable-buttondown-form"
          autoComplete={"on"}
        >
          <input
            id="bd-email"
            className="email-address"
            placeholder="Email address"
            required
            name="email"
            type="email"
            ref={ref}
          />
          <input type="hidden" value="1" name="embed" />
          <input
            className="submit-btn"
            id="mc-embedded-subscribe"
            type="submit"
            value="Subscribe"
            onClick={() => {
              if (ref.current.checkValidity()) {
                setStyles({ visibility: "visible" });
              }
            }}
          />
        </form>
      </div>
      <p className="Subscription__confirmation" style={styles}>
        Thanks for subscribing! Your subscription is confirmed.
      </p>
    </div>
  );
};

Subscription.propTypes = {
  siteTitle: PropTypes.string,
};

Subscription.defaultProps = {
  siteTitle: ``,
};

export default Subscription;
