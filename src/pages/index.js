import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subscription from "../components/subscription";
import CoffeeImg from "./coffee.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="How it works"
        description="Learn how it works in javascript."
        slug={""}
      />
      <h2>Hi people!</h2>
      <p>This is G, welcome to how it works site.</p>
      <div
        style={{
          maxWidth: `300px`,
          marginTop: `1.45em`,
          marginBottom: `1.45rem`,
        }}
      >
        <img src={CoffeeImg} style={{ maxWidth: "100%" }} alt="Coffee" />
      </div>
      <p>
        Are you coffee/tea person? If so grab one in your hand and we will
        continue ;).
      </p>
      <p>
        This site's main focus is to help you and me to understand what is
        happening under the hood of javascript features or methods. While
        reading my posts via this site or newsletter, hopefully you will also
        learn as much as me.
      </p>
      <p>
        Do reply to my emails via newsletter or via comments in each post if
        there is a mistake or a better way to do it. Let's keep the learning and
        conversation going.
      </p>
      <p>
        Go to <a href="/posts">posts</a> to read previous archives.
      </p>
      <Subscription />
      <div className="layout__footer">
        <h4>Cheers,</h4>
        <h4>
          <a
            href="https://gokul.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gokul
          </a>
        </h4>
      </div>
    </Layout>
  );
};

export default IndexPage;
