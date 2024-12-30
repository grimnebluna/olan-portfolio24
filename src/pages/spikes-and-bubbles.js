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
          <h2 className={styles.h2heading}>Spikes & Bubbles</h2>
          <p>release date: 30 dec 2024 on <a href="https://deedeespicks.bandcamp.com/" target="_blank" rel="noopener">Dee Dee's picks</a></p>
          <a href="https://deedeespicks.bandcamp.com/album/ddp016-spikes-bubbles" target="_blank" rel="noopener" class="buybtn button">Bandcamp</a>
          <a href="https://soundcloud.com/olangalactica/sets/spikes-bubbles" target="_blank" rel="noopener" class="buybtn button">Soundcloud</a>
          <a href="https://www.youtube.com/watch?v=GxiaOtEY-gA&list=OLAK5uy_nb0dxKoMifEyWmUuDGmqtJy-8nP_K8d_8" target="_blank" rel="noopener" class="buybtn button">Youtube</a>
          <a href="https://music.apple.com/ch/album/spikes-bubbles/1782295722" target="_blank" rel="noopener" class="buybtn button">Apple Music</a>
          <a href="https://open.spotify.com/album/0W7SEu7fBslr5WRLCqKORg?si=SfkEm9HeQhi0hzrXzvr7rA" target="_blank" rel="noopener" class="buybtn button">Spotify</a>

          
      </div>
      <div className="contentdiv">
      <StaticImage
          src="../images/cover-comp.webp"
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

export const Head = () => <Seo title="Spikes & Bubbles | Olan!" />

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
