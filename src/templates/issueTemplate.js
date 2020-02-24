import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Subscription from "../components/subscription";

export default function Template({ data, path }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const { published, date, title } = frontmatter;

  if (!published) return null;

  return (
    <Layout>
      <div className="issues">
        <Link to={`/${path.split("/")[1]}`} className="issues__preview-back">
          ← Go back
        </Link>
        <div className="issues__preview-info">
          <h2 className="title">{title}</h2>
          <time>{date}</time>
        </div>
        <div className="line" />
        <div
          className="issues__preview-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <hr />

        <Subscription />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IssueByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        published
        title
      }
    }
  }
`;
