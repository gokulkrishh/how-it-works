import React from "react";

import Layout from "../components/layout";
import Card from "../components/card";
import list from "./javascript/list";
import Subscription from "../components/subscription";

const JavascriptPage = ({ data }) => (
  <Layout>
    <div className="Javascript">
      <div className="Javascript__content">
        <h2>Javascript</h2>
        <p>
          For learning and understanding Javascript better and to know what
          could be its implementation internally.
        </p>
      </div>

      <ul className="Javascript__list">
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
      </ul>
      <div className="Javascript__subscription">
        <Subscription />
      </div>
    </div>
  </Layout>
);

export default JavascriptPage;
