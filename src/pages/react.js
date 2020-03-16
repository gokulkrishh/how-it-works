import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import list from "./react/list";
import Subscription from "../components/subscription";

const ReactPage = ({ data }) => (
  <Layout>
    <SEO
      title="How it works | React"
      description="Learn how it works in react."
      slug={""}
    />
    <div className="Javascript">
      <div className="Javascript__content">
        <h2>React</h2>
        <p>
          For learning and understanding React, Redux better and to know what
          could be its implementation internally.
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
          );
        })}
      </div>
      <div className="Javascript__subscription">
        <Subscription />
      </div>
    </div>
  </Layout>
);

export default ReactPage;
