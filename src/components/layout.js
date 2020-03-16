/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "./seo";
import Header from "./header";
import "../styles/index.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark {
        frontmatter {
          path
        }
      }
    }
  `);

  const slugArr = data.markdownRemark.frontmatter.path.split("/");
  const slug = slugArr[slugArr.length - 1] || "";

  return (
    <>
      <SEO title={data.site.siteMetadata.title} slug={slug.toLowerCase()} />
      <Header siteTitle={data.site.siteMetadata.title} slug={""} />
      <div className="layout">
        <main>
          <div className="layout__content">{children}</div>
        </main>
      </div>
      <footer>
        <div className="footer__content">
          <p>
            © {new Date().getFullYear()}, Built with {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
