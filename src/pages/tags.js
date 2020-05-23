import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subscription from "../components/subscription";

// Components
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <SEO
      title="How it works | Posts"
      description="For learning and understanding Javascript better and to know what could be its implementation."
      slug={""}
    />
    <div className="tags">
      <Helmet title={title} />
      <h2>All Tags</h2>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span>{tag.totalCount}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Subscription />
    </div>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
