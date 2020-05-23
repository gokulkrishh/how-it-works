import React from "react";
import { graphql, Link } from "gatsby";
import { Disqus } from "gatsby-plugin-disqus";
import kebabCase from "lodash/kebabCase";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subscription from "../components/subscription";

export default function Template({ location, data, path }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const { published, date, title, description, tags } = frontmatter;

  console.log(tags);

  if (!published) return null;

  let disqusConfig = {};

  const slugArr = location.pathname.split("/");
  const slug = slugArr[slugArr.length - 1].toLowerCase();

  return (
    <Layout>
      <SEO title={title} description={description} slug={slug} />
      <div className="issues">
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
        <ul className="tags">
          Tags:{" "}
          <li>
            {tags.map(tag => {
              return (
                <Link
                  to={`tags/${kebabCase(tag)}`}
                  className="issues__preview-back"
                >
                  {tag}
                </Link>
              );
            })}
          </li>
        </ul>
        <Subscription />
        <Disqus config={disqusConfig} />
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
        description
        tags
      }
    }
  }
`;
