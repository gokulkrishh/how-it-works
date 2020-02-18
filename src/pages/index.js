import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Subscription from "../components/subscription"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      Welcome to how it works in Javascript site. Let me first start with why I
      created this site.
    </p>
    <p>
      When I started my career as a web developer, I struggled a lot to
      understand how a method or a feature in Javascript works internally, for
      example <b>Promise.all</b> or <b>.bind</b> etc,. I have been asked to
      write in white paper or implement it online in many interview's. Sometimes
      I struggled and sometimes I was able to do it. I could find articles
      online here and there explaining how it works. But it was not enough.
    </p>
    <p>
      After gaining 7 years of total experience in web development. I still
      could not able to find a better resource on how it works internally for
      many features in Javascript. Hence I created this site to learn more and
      to understand even better about javascript and its internal
      implementations.
    </p>

    <p>
      Hopefully you will also learn as much as me via this site. Do reply me to
      my emails via subscription if I make a mistake or if there is better way
      to do it. Lets keep the learning and conversation going.
    </p>

    <Subscription />

    <p>
      And I will make sure the email list is keep secret and I promise there
      wont be any spamming.
    </p>
    <h3>Cheers,</h3>
    <h3>Gokul</h3>
  </Layout>
)

export default IndexPage
