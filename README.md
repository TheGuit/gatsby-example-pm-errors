## Testing package managers with Gatsby monorepo using workspace themes

Using workspaces to manage themes in Gatsby and have some inheritance between them.
This simple Gatsby project contains 1 worktree made of 3 workspaces : 
* site (site information)
* themes/gatsby-theme-parent
* themes/gatsby-theme-child

For gatsby-friendly users, we're "shadowing" (override here) the page index.js from `gatsby-theme-parent` into `gatsby-theme-child`.
We also use a graphql query fragment exported in `gatsby-theme-parent` in our child theme.

#### Dependencies space disk usage

* yarn1-without-pnp => folder `node_modules` **458M**
* yarn1-with-pnp => folder `.pnp` **71M**
* yarn2-with-pnp => folder `.yarn` **204M**
* pnpm => folder `node_modules` **415M** + folder `.pnpm-store` **23M**

#### State

When running `bin/yarn workspace site develop`, gatsby is complaining because he doesn't know about plugin "gatsby-theme-parent" in `themes/gatsby-theme-child/gatsby-config.js`. Yet this seems to be the way to declare inheritance between gatsby themes (https://www.gatsbyjs.com/blog/2019-01-29-themes-update-child-theming-and-component-shadowing/).

If we remove this line declaration, Gatsby's development server is working, but it doesn't find our index.js (resulting in 404 displayed on preview). This means workspaces don't work as they should, since gatsby-config.js from parent-theme is not read.

Adding peer-dependency to gatsby-theme-parent in gatsby-theme-child's package.json seems to resolve that issue. The gatsby-config.js file from parent-theme seems to be read.
However we are getting the exact same issue reported here https://github.com/gatsbyjs/gatsby/discussions/20949#discussioncomment-347399