import { graphql, useStaticQuery } from "gatsby"
import React from "react"


const Home = () => {
  const data = useStaticQuery(graphql`
  query SiteQuery {
    site {
      ...SiteInformation
    }
  }
  `)
  return (
    <>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>
    </>
  )
}

export default Home
