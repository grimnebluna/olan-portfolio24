import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// import functions to work with dates and date formats:
import { format, parseISO } from "date-fns"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const releasesPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        <div className="zweispaltigWrapper">
      <h2 className={styles.h2heading}>Recent Releases</h2>
        <div className="contenZweispaltig">
        {data.allWpContentEmbed.edges.map(({node}) => (

              node.embedFelder.place == "releases" && (
               
               <div key={node.id} role="listitem" className="embedElem">
                   <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
              </div>

              )
              

          ))} 


      </div>
        <p style={{marginTop: "20px"}}><a href="https://olan1.bandcamp.com" target="_blank">more stuff on Bandcamp</a></p>

        </div>

        <div className="zweispaltigWrapper">
            <h2 className={styles.h2heading}>Full Discography</h2>
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

export const Head = () => <Seo title="Page two" />

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
    discography {
      disco
    }
  }
  
}
`

export default releasesPage
