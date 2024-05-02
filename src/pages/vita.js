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
          <h2 className={styles.h2heading}>About</h2>

           {/* instead of the nl trick, use dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.aboutcontact.about }} />

            <h2 style={{marginTop: "80px"}} className={styles.h2heading}>Contact</h2>

            <div dangerouslySetInnerHTML={{ __html: data.wpPage.aboutcontact.contact }} />


      </div>
      <div className="contentdiv">
      <StaticImage
          src="../images/2023_012_007_HR.jpg"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
        />

        </div>
      </div>

    </div>
  </Layout>
)

export const Head = () => <Seo title="About + Contact | Olan!" />

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
