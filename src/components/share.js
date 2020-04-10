import PropTypes from "prop-types";
import React from "react";

const Share = ({ title, url }) => {
  return (
    <div className="Share">
      Share the article
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonLarge%3Don%26buttonRecommendation%3Dgokul_i%26buttonType%3DMentionButton%26query%3D%2540gokul_%26widget%3DButton&ref_src=twsrc%5Etfw&related=gokul_i&screen_name=gokul_&tw_p=tweetbutton"
      >
        Tweet
      </a>
    </div>
  );
};

export default Share;
