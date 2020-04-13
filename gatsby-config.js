module.exports = {
  siteMetadata: {
    title: `Anton Strand`,
    description: `A small website about me.`,
    author: `Anton Strand`,
    location: "Stockholm",
    contact: {
      github: {
        link: `https://github.com/antonstrand`,
        label: `antonstrand`,
      },
      linkedin: {
        link: `https://linkedin.com/in/antonstrand`,
        label: `antonstrand`,
      },
      mail: {
        link: `mailto:jag@antonstrand.se`,
        label: `jag@antonstrand.se`,
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anton Strand - Website`,
        short_name: `Anton Strand`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: `src/images/avatar.png`, // This path is relative to the root of the site.
        // Change icon location to not conflict with Apaches icon folder
        icons: [
          {
            src: `favicons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
