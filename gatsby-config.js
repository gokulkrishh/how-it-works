module.exports = {
  siteMetadata: {
    title: `How it works`,
    description: `Learn how it works in javascript.`,
    author: `@gokulkrishh`,
    siteUrl: `https://how-it-works.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/posts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-social-cards`,
            options: {
              meta: {
                parts: [
                  "- ",
                  { field: "author" },
                  " » ",
                  { field: "date", format: "mmmm dS" },
                ],
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              numberLines: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          "@weknow/gatsby-remark-twitter",
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,400,500,700`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-158930416-1`,
      },
    },
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.how-it-works.dev`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-how-it-works-dev`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
