// load .env files
require("dotenv").config()

module.exports = {
  pathPrefix: process.env.PATH_PREFIX,
  plugins: [`gatsby-theme-parent`],
}
