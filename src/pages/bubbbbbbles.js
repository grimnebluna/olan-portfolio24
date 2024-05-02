import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const bubblesPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        
        <div className="contentdiv">
          <h2 className={styles.h2heading}>Bubbbbbles #1</h2>
          <p>Sat. 25th May 2024, <a href="https://cafete.ch/" target="_blank">Cafete Reitschule Bern</a></p>
          <p><a href="https://soundcloud.com/olangalactica" target="_blank">Olan!</a> [0x01- ZH]</p>
          <p><a href="https://soundcloud.com/polarstella" target="_blank">stellab</a> b2b <a href="https://soundcloud.com/g-rtz-1" target="_blank">zogreth</a> [<a href="https://www.instagram.com/vierzmr_" target="_blank">vierzmr</a> - ZH]</p>
          <p>Electro / Techno / Rave</p>
          <p>With the Bubbbbbles Party, Olan! brings their favorite DJs from their bubble to Bern. High-quality baller music is to be expected.</p>


      </div>
      <div className="contentdiv">
      <StaticImage
          src="../images/240525_bubbbbbles_fb.jpg"
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

export default bubblesPage
