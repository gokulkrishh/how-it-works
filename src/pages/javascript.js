import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

import list from "./javascript/list"
import Subscription from "../components/subscription"

const JavascriptPage = () => (
  <Layout>
    <SEO title="Javascript" />
    <div className="Javascript">
      <div className="Javascript__content">
        <h2>Javascript</h2>
        <p>
          Contains the implementation of in-built or custom methods from
          Javascript.
        </p>
      </div>

      <div className="Javascript__list">
        {list.methods.map(method => {
          return (
            <Card
              key={method.name}
              name={method.name}
              description={method.description}
              link={method.link}
              disabled={method.comingSoon}
            />
          )
        })}
      </div>
      <div className="Javascript__subscription">
        <Subscription />
      </div>
    </div>
  </Layout>
)

export default JavascriptPage
