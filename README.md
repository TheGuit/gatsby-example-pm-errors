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

Gatsby's development server is working.