import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subscription from "../components/subscription";

const JavascriptPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => {
      const post = edge.node;
      return (
        <li className="Card" key={edge.node.id}>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          <p>
            <time>{post.frontmatter.date}</time>
          </p>
          <p>{post.frontmatter.description}</p>
        </li>
      );
    });

  return (
    <Layout>
      <SEO
        title="How it works | Posts"
        description="For learning and understanding Javascript better and to know what could be its implementation."
        slug={""}
      />
      <div className="Javascript">
        <div className="Javascript__content">
          <h2>All Posts</h2>
          <p>
            For learning and understanding Javascript better and to know what
            could be its implementation.
          </p>
        </div>

        <ul className="Javascript__list">{Posts}</ul>
        <div className="Javascript__subscription">
          <Subscription />
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

export default JavascriptPage;
