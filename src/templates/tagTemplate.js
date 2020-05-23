import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subscription from "../components/subscription";

const Tags = ({ pageContext, location, data, path }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  const slugArr = location.pathname.split("/");
  const slug = slugArr[slugArr.length - 1].toLowerCase();

  return (
    <Layout>
      <SEO title="tags" description="All tags" slug={slug} />
      <div className="Javascript">
        <div className="Javascript__content">
          <Link to={`/tags`} className="issues__preview-back">
            ← All tags
          </Link>
          <h2>{tagHeader}</h2>
        </div>
        <ul className="Javascript__list">
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title, date, description, path } = node.frontmatter;
            return (
              <li className="Card" key={slug}>
                <Link to={path}>{title}</Link>
                <p>
                  <time>{date}</time>
                </p>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
        <div className="Javascript__subscription">
          <Subscription />
        </div>
      </div>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
            path
          }
        }
      }
    }
  }
`;
