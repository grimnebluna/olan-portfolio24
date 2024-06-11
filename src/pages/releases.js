import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const releasesPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        <div className="zweispaltigWrapper">
      <h2 className={styles.h2heading}>{data.wpPage.discography.recentReleasesTitel}</h2>
        <div className="contenZweispaltigNoGap">
        {data.allWpContentEmbed.edges.sort((a, b) => {
                // Assuming datum is in a format that can be compared directly, like YYYY-MM-DD
                // Convert to date objects if needed, or handle your specific format
                return new Date(b.node.embedFelder.datum) - new Date(a.node.embedFelder.datum);
              }).map(({node}) => (

              node.embedFelder.place.toString() === "releases" && (
               
               <div key={node.id} role="listitem" className="embedElem">
                   <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
              </div>

              )
              

          ))} 


      </div>
      {/*  TODO */}
        <p style={{marginTop: "20px", marginBottom: "0px"}}><a href="https://olan1.bandcamp.com" target="_blank" rel="noopener">more stuff on Bandcamp</a></p>
        <p><a href="https://0x01.space/releases" target="_blank" rel="noopener">more info on 0x01.space</a></p>

        </div>

            {/* Full Discography */}
        <div className="zweispaltigWrapper">
            <h2 className={styles.h2heading}>{data.wpPage.discography.titelFullDiscography}</h2>
            <div className="content">

              

            {/* embed disco again but with nl2br */}
            {data.wpPage.discography.disco.split("\n").map((i,key) => {
              return <div key={key}>{i}<br/></div>
            })}
            </div>

        </div>

        </div>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Releases + Discography | Olan!" />

export const query = graphql`
query  {
  allWpContentEmbed {
    edges {
      node {
        id
        embedFelder {
          datum
          embedcode
          place
        }
      }
    }
  }
  wpPage(slug: {eq: "discography"}) {
    title
    discography {
      disco
      recentReleasesTitel
      titelFullDiscography
    }
  }
  
}
`

export default releasesPage
