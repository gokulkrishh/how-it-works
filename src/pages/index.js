import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Subscription from "../components/subscription";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hi people!</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      Welcome to how it works in Javascript site. Let me first start with why I
      created this site.
    </p>
    <p>
      Are you coffee/tea person? If so get one in your hand and we will continue
      ;).
    </p>
    <p>
      When I started my career as a web developer, I struggled to understand how
      a method or a feature in Javascript works internally, for example{" "}
      <b>Promise.all()</b> or <b>Object.create()</b>, etc. I have been or I have
      asked to implement these methods in interviews.
    </p>
    <p>
      So I created this site to learn and understand Javascript even better and
      to know what could be its implementation internally.
    </p>
    <p>
      Hopefully, you will also learn as much as me via this site/newsletter.
    </p>
    <p>
      Do reply to my emails via subscription or via comments in each post if
      there is a mistake or a better way to do it. Let's keep the learning and
      conversation going.
    </p>
    <Subscription />
    <p>
      And I will make sure the email list is kept secret and there won't be any
      spamming!
    </p>
    <div className="layout__footer">
      <h4>Cheers,</h4>
      <h4>
        <a href="https://gokul.site" target="_blank" rel="noopener noreferrer">
          Gokul
        </a>
      </h4>
    </div>
  </Layout>
);

export default IndexPage;
