import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// import functions to work with dates and date formats:
import { format, parseISO } from "date-fns"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const vitaPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        
        <div className="contentdiv">
          <h2 className={styles.h2heading}>About</h2>

           {/* instead of the nl trick, use dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.aboutcontact.about }} />




      </div>
      <div className="contentdiv">


        </div>
      <div className="contentdiv">

      <h2 className={styles.h2heading}>Contact</h2>
      
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.aboutcontact.contact }} />

        </div>
        <div className="contentdiv">
          <h2 className={styles.h2heading}>Vita</h2>


        </div>
      </div>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export const query = graphql`
query  {
  wpPage(slug: {eq: "aboutcontact"}) {
    aboutcontact {
      about
      contact
    }
  }
}
`

export default vitaPage
