import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const soundtrackPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        
        <div className="zweispaltigWrapper">

            {/* Scores / Soundtrack */}
          <h2 className={styles.h2heading}>{data.wpPage.title}</h2>
            {/* embed disco again but with nl2br */}
                   <div className="contentdiv" dangerouslySetInnerHTML={{ __html: data.wpPage.soundtrack.soundtracktext }} />


      </div>
      <div className="contentdiv">

            {/* Theater */}
      <h2 className={styles.h2heading}>{data.wpPage.soundtrack.theatertitle}</h2>
        {data.allWpContentEmbed.edges.sort((a, b) => {
                // Assuming datum is in a format that can be compared directly, like YYYY-MM-DD
                // Convert to date objects if needed, or handle your specific format
                return new Date(b.node.embedFelder.datum) - new Date(a.node.embedFelder.datum);
              }).map(({node}) => (

          node.embedFelder.place.toString() === "theater" && (
           
           <div key={node.id} role="listitem" className="embedElem">
               <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
          </div>

          )
          

      ))} 

        </div>
        <div className="contentdiv">

            {/* Film */}
          <h2 className={styles.h2heading}>{data.wpPage.soundtrack.filmtitle}</h2>
          {data.allWpContentEmbed.edges.sort((a, b) => {
                // Assuming datum is in a format that can be compared directly, like YYYY-MM-DD
                // Convert to date objects if needed, or handle your specific format
                return new Date(b.node.embedFelder.datum) - new Date(a.node.embedFelder.datum);
              }).map(({node}) => (

            node.embedFelder.place.toString() === "film" && (
            
            <div key={node.id} role="listitem" className="embedElem">
                <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
            </div>

            )


            ))} 

        </div>
      </div>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Theater + Film Music | Olan!" />

export const query = graphql`
query  {
  allWpGig(limit: 100) {
    edges {
      node {
        id
        title
        konzertfelder {
          datum
          ort
          type
          linkurl
        }
      }
    }
  }
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
  wpPage(slug: {eq: "soundtrack"}) {
    title
    soundtrack {
      soundtracktext
      theatertitle
      filmtitle
    }
  }
}
`

export default soundtrackPage
