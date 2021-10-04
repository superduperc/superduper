const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `superduper`,
    description: `vape`,
    author: `@zulzdn`,
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `islamtshirt`,
        short_name: `islamtshirt`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.SHOPIFY_STORE_URL,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    'gatsby-plugin-offline',

  {
    resolve: `gatsby-plugin-portal`,
    options: {
      key: 'portal',
      id: 'portal',        
    },
  },
  ],
}
