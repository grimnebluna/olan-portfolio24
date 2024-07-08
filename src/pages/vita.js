import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const vitaPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        
        <div className="contentdiv">
          <h2 className={styles.h2heading}>{data.wpPage.title}</h2>

           {/* instead of the nl trick, use dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.aboutcontact.about }} />

            <h2 style={{marginTop: "80px"}} className={styles.h2heading}>Contact</h2>

            <div dangerouslySetInnerHTML={{ __html: data.wpPage.aboutcontact.contact }} />


      </div>
      <div className="contentdiv">
      <StaticImage
          src="../images/R1-08927-005A.jpeg"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
        {/*<p style={{fontSize: "14px", textAlign: "right"}}>pic by <a href="https://instagram.com/niom.tv/" target="_blank" rel="noopener noreferrer">@niom.tv</a></p>*/}

        </div>
      </div>

    </div>
  </Layout>
)

export const Head = () => <Seo title="About + Contact | Olan!" />

export const query = graphql`
query  {
  wpPage(slug: {eq: "aboutcontact"}) {
    title
    aboutcontact {
      about
      contact
    }
  }
}
`

export default vitaPage
