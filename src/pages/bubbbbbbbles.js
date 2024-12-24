import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const bubblesPage2 = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        
        <div className="contentdiv">
          <h2 className={styles.h2heading}>Bubbbbbles #3</h2>
          <p>Fri 31st January 2024, <a href="https://cafete.ch/" target="_blank" rel="noopener">Cafete Reitschule Bern</a></p>
          <p><a href="https://soundcloud.com/mean-girlzz-mean-girlz" target="_blank" rel="noopener">Meangirlz</a> [ZH]</p>
          <p><a href="https://soundcloud.com/olangalactica" target="_blank" rel="noopener">Olan!</a> [0x01 - ZH]</p>
          <p>Mene [ZH]</p>
          <p>Electro / Techno / Rave / Breaks</p>
          <p>With the Bubbbbbles Party, Olan! brings their favorite DJs from their bubble to Bern. High-quality baller music is to be expected.</p>


      </div>
      <div className="contentdiv">
      <StaticImage
          src="../images/250131_bubbbbbles3-insta.jpg"
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

export default bubblesPage2
