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

At this point we have this error on WEBPACK step : 
`
If you're trying to use a package make sure that 'undefined' is installed. If you're trying to use a local file make sure that the path is correct.

File: ../../../home/node/.cache/yarn/v6/npm-gatsby-react-router-scroll-4.10.0-4df44bf4dcae2b2af75b5487fded9c385e5b54f1-integrity/node_modules/gatsby-react-router-scroll/scroll-handler.js:14:40
`
