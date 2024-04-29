/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import * as styles from "../components/index.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={styles.mainContainer}>
        <main className={styles.mainWrapper}>{children}</main>
        
        <footer
          style={{
            fontSize: `var(--font-sm)`,
            zIndex: 1000,
            color: `#eba0ff`
          }}
        >&nbsp;<a href="/">Olan!</a></footer>
        
      </div>

      <div className="overlay-1"></div>
      <div className="overlay-2"></div>
    {/*  <div className="overlay-25"></div> */}
      <div className="overlay-3"></div>
      <div className="overlay-4"></div>
      <div className="overlay-45"></div>
      <div className="overlay-5"></div>
      <div className="overlay-6"></div>
    </>
  )
}

export default Layout
