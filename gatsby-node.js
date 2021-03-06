const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const kebabCase = require("lodash/kebabCase");

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const issueTemplate = path.resolve(`src/templates/issueTemplate.js`);
  const tagTemplate = path.resolve(`src/templates/tagTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: issueTemplate,
        context: {}, // additional data can be passed via context
      });
    });

    const tags = result.data.tagsGroup.group;
    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
