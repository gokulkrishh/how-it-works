import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 page not found" description="Page not found" slug={""} />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go to home →</Link>
    </Layout>
  );
};

export default NotFoundPage;
