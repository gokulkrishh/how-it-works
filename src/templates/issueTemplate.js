import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="issues">
        <Link to="/javascript" className="issues__preview-back">
          ← Go back
        </Link>
        <div className="issues__preview-info">
          <h2 className="title">{frontmatter.title}</h2>
          <time>{frontmatter.date}</time>
        </div>
        <div className="line" />
        <div
          className="issues__preview-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IssueByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
