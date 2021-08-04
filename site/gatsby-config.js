const { bootstrap } = require("global-agent")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
bootstrap()
const config = {
  pathPrefix: process.env.PATH_PREFIX,
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: `Gatsby with Drupal`,
    description: `Générateur de sites statiques basé sur Gatsby et Drupal`,
    author: `atolcd`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    {
      resolve: process.env.THEME_GATSBY,
      options: {},
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}

module.exports = config
