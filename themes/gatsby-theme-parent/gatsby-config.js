const { process } = require("window-or-global")

// load .env files
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log(process.env.NODE_ENV)

/* eslint-disable no-console */
console.log("[============== Debugging env variables")
console.log("THEME_GATSBY = " + process.env.THEME_GATSBY)
console.log("PATH_PREFIX = " + process.env.PATH_PREFIX)
console.log("SITE_URL = " + process.env.SITE_URL)
/* eslint-enable no-console */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX,
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2kon4e1bmnzq`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    }
  ],
}
