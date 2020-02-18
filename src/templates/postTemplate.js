import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default function Template({ data }) {
  console.log("data ------->", data)
  // const { markdownRemark } = data
  // const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>
        <Link to="/" className="issue__preview-back">
          ← Go back
        </Link>
      </div>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query postByPath($path: String!) {
//     # markdownRemark(frontmatter: { path: { eq: $path } }) {
//     #   html
//     #   frontmatter {
//     #     date(formatString: "MMMM DD, YYYY")
//     #     path
//     #     title
//     #   }
//     # }
//   }
// `
